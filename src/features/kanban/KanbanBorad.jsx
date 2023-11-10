import React, { useState } from 'react';
import Progress from './Progress';
import { useBackLogPageRes } from '../../store/BackLogStore/store';
import {
  AllThisSprints,
  useSelectedSprint,
} from '../../store/SprintStore/store';
import { useMutation, useQuery } from 'react-query';
import { fetchKanbanList, updateKanbanList } from '../../apis/kanbanApis';
import { useKanbanCloums, useKanbanData } from '../../store/KanbanStore/sotre';

export default function KanbanBoard() {
  // 헤더 프로젝트 번호
  const { currentProjectNumber } = useBackLogPageRes((state) => state);
  // 현재 프로젝트, 스프린트, 스프린트 제목에 대한 데이터
  const { projectNo, sprintNo, selectedSprintTitle } = useSelectedSprint(
    (state) => state,
  );
  //데이터들 ~_~
  const { datalist, setDatalist } = AllThisSprints((state) => state);

  //
  const { datalist: Kanban } = useKanbanData((state) => state);
  //
  const {
    setColums,
    colums,
    setNewColums,
    expecting,
    setCurrentSelectedBackLog,
    currentSelectedBackLogNo,
    setCurrentStatus,
    currentStatus,
  } = useKanbanCloums((state) => state);

  // const [columns, setColumns] = useState([
  //   {
  //     status: '진행 예정',
  //     color: 'bg-red-500',
  //     items: Kanban?.filter((item) => item.status === 'todo'),
  //   },
  //   {
  //     status: '진행 중',
  //     color: 'bg-blue-500',
  //     items: Kanban?.filter((item) => item.status === 'ing'),
  //   },
  //   {
  //     status: '완료',
  //     color: 'bg-green-500',
  //     items: Kanban?.filter((item) => item.status === 'done'),
  //   },
  // ]);

  const onDragStart = (e, columnIndex, itemIndex) => {
    e.dataTransfer.setData('columnIndex', columnIndex);
    e.dataTransfer.setData('itemIndex', itemIndex);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const { mutate: updateKanbanData, isLoading } = useMutation(
    ({ currentSelectedBackLogNo, cStatus }) =>
      updateKanbanList(currentSelectedBackLogNo, cStatus),
    {
      onSuccess: (user) => {
        console.log('Success : ', user);
        // queryClient.invalidateQueries();
        // navigate('/home');
      },
      onError: (error) => {
        console.log('Error', error);
      },
    },
  );

  const onDrop = (e, columnIndex) => {
    console.log('coumlIndex test:', columnIndex);
    const sourceColumnIndex = e.dataTransfer.getData('columnIndex');
    const itemIndex = e.dataTransfer.getData('itemIndex');

    if (sourceColumnIndex === columnIndex) return;

    const newColumns = [...colums];
    const [draggedItem] = newColumns[sourceColumnIndex].items.splice(
      itemIndex,
      1,
    );
    newColumns[columnIndex].items.push(draggedItem);
    setNewColums(newColumns);
  };

  console.log('column :', colums);

  return (
    <div className="grid grid-cols-3 m-4 ml-8">
      {colums?.map((column, columnIndex) => (
        <div
          key={columnIndex}
          onDragOver={onDragOver}
          onDrop={(e) => {
            onDrop(e, columnIndex);
            console.log('column status:', column.status);
            // setCurrentStatus(column.status);
            updateKanbanData({
              currentSelectedBackLogNo,
              cStatus: column.status,
            });

            console.log('onDrop column', column.status);
          }}
        >
          <h2>
            <Progress value={column?.status} color={column?.color} />
          </h2>

          {column.items &&
            column.items.map((item, itemIndex) => (
              <div
                key={item.id}
                draggable
                onDragStart={(e) => {
                  onDragStart(e, columnIndex, itemIndex);
                  console.log('onDragStart', item);
                  setCurrentSelectedBackLog(item.no);
                }}
                className="w-11/12 py-1 mb-1 text-center"
              >
                <div className="hover:cursor-move group max-w-xs mx-auto rounded-lg p-3 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-[#f7cc10] hover:ring-[#f7cc10]">
                  <span className="flex justify-center">
                    <img
                      src={item.image}
                      alt="백로그_담당자_이미지"
                      className="w-6 h-6 rounded-full mr-2"
                    />
                    <span class="text-slate-900 group-hover:text-white text-sm font-semibold">
                      {item.title}
                    </span>
                  </span>
                </div>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}
