import React, { useState } from 'react';
import Progress from './Progress';
import { useMutation, useQuery } from 'react-query';
import { updateKanbanList } from '../../apis/kanbanApis';
import { TiPin } from 'react-icons/ti';
import { useKanbanCloums, useKanbanData } from '../../store/KanbanStore/sotre';

export default function KanbanBoard() {
  const {
    colums,
    setNewColums,
    setCurrentSelectedBackLog,
    currentSelectedBackLogNo,
  } = useKanbanCloums((state) => state);

  const onDragStart = (e, columnIndex, itemIndex) => {
    e?.dataTransfer?.setData('columnIndex', columnIndex);
    e?.dataTransfer?.setData('itemIndex', itemIndex);
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
    const sourceColumnIndex = e?.dataTransfer?.getData('columnIndex');
    const itemIndex = e?.dataTransfer?.getData('itemIndex');

    if (sourceColumnIndex === columnIndex) return;

    const newColumns = [...colums];
    const [draggedItem] = newColumns[sourceColumnIndex]?.items.splice(
      itemIndex,
      1,
    );
    newColumns[columnIndex]?.items?.push(draggedItem);
    setNewColums(newColumns);
  };

  console.log('column :', colums);

  return (
    // <div className="grid grid-cols-3 m-4 ml-8">
    //   {colums?.map((column, columnIndex) => (
    //     <div
    //       key={columnIndex}
    //       onDragOver={onDragOver}
    //       onDrop={(e) => {
    //         onDrop(e, columnIndex);
    //         console.log('column status:', column?.status);
    //         // setCurrentStatus(column.status);
    //         updateKanbanData({
    //           currentSelectedBackLogNo,
    //           cStatus: column?.status,
    //         });

    //         console.log('onDrop column', column?.status);
    //       }}
    //     >
    //       <h2>
    //         <Progress value={column?.status} color={column?.color} />
    //       </h2>

    //       {column?.items &&
    //         column?.items?.map((item, itemIndex) => (
    //           <div
    //             key={item?.id}
    //             draggable
    //             onDragStart={(e) => {
    //               onDragStart(e, columnIndex, itemIndex);
    //               console.log('onDragStart', item);
    //               setCurrentSelectedBackLog(item?.no);
    //             }}
    //             className="w-11/12 py-1 mb-1 text-center"
    //           >
    //             <div className="hover:cursor-move group max-w-xs mx-auto rounded-lg p-3 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-[#f7cc10] hover:ring-[#f7cc10]">
    //               <span className="flex justify-center">
    //                 <img
    //                   // src={item.image}
    //                   src={`data:image/*;base64,${item?.image}`}
    //                   alt="백로그_담당자_이미지"
    //                   className="w-6 h-6 rounded-full mr-2"
    //                 />
    //                 <span class="text-slate-900 group-hover:text-white text-sm font-semibold">
    //                   {item?.title}
    //                 </span>
    //               </span>
    //             </div>
    //           </div>
    //         ))}
    //     </div>
    //   ))}
    // </div>
    <div className="flex gap-4 m-4 ml-8">
      {colums?.map((column, columnIndex) => (
        <div
          key={columnIndex}
          className={`flex-1 ${column?.color} p-4 rounded-lg`}
          onDragOver={onDragOver}
          onDrop={(e) => {
            onDrop(e, columnIndex);
            console.log('column status:', column?.status);
            updateKanbanData({
              currentSelectedBackLogNo,
              cStatus: column?.status,
            });
            console.log('onDrop column', column?.status);
          }}
        >
          <h2 className="flex flex-row">
            <span className="items-center text-3xl text-red-500 font-black">
              <TiPin />
            </span>
            <Progress value={column?.status} />
          </h2>
          <h2 className="mb-4 text-xl font-bold">{column?.title}</h2>
          {column?.items &&
            column?.items?.map((item, itemIndex) => (
              <div
                key={item?.id}
                draggable
                onDragStart={(e) => {
                  onDragStart(e, columnIndex, itemIndex);
                  setCurrentSelectedBackLog(item?.no);
                }}
                className="mb-4 p-4 bg-white border rounded-lg cursor-move hover:bg-gray-100"
              >
                <div className="flex items-center">
                  <img
                    src={`data:image/*;base64,${item?.image}`}
                    alt="백로그_담당자_이미지"
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <span className="text-gray-800 text-lg ml-1 font-semibold">
                    {item?.title}
                  </span>
                </div>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}
