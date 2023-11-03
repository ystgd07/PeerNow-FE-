import React, { useState } from 'react';
import Progress from './Progress';

export default function TestKanbanBoard() {
  const [columns, setColumns] = useState([
    {
      title: '진행 예정',
      color: 'bg-red-500',
      items: [
        { id: 1, text: '화면 설계서 작성', imgSrc: 'testImg.jpg' },
        { id: 2, text: 'API 명세서 작성', imgSrc: 'testImg.jpg' },
      ],
    },
    {
      title: '진행 중',
      color: 'bg-blue-500',
      items: [
        { id: 3, text: '인프라 아키텍처 그리기', imgSrc: 'testImg.jpg' },
        { id: 4, text: 'Route53 도메인 연결', imgSrc: 'testImg.jpg' },
      ],
    },
    {
      title: '완료',
      color: 'bg-green-500',
      items: [{ id: 5, text: '메인페이지 UI 작업', imgSrc: 'testImg.jpg' }],
    },
  ]);

  const onDragStart = (e, columnIndex, itemIndex) => {
    e.dataTransfer.setData('columnIndex', columnIndex);
    e.dataTransfer.setData('itemIndex', itemIndex);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e, columnIndex) => {
    const sourceColumnIndex = e.dataTransfer.getData('columnIndex');
    const itemIndex = e.dataTransfer.getData('itemIndex');

    if (sourceColumnIndex === columnIndex) return;

    const newColumns = [...columns];
    const [draggedItem] = newColumns[sourceColumnIndex].items.splice(
      itemIndex,
      1,
    );
    newColumns[columnIndex].items.push(draggedItem);
    setColumns(newColumns);
  };

  return (
    <div className="grid grid-cols-3 m-4 ml-8">
      {columns.map((column, columnIndex) => (
        <div
          key={columnIndex}
          onDragOver={onDragOver}
          onDrop={(e) => {
            onDrop(e, columnIndex);
            console.log('onDrop column', column);
          }}
        >
          <h2>
            <Progress value={column.title} color={column.color} />
          </h2>
          {column.items &&
            column.items.map((item, itemIndex) => (
              <div
                key={item.id}
                draggable
                onDragStart={(e) => {
                  onDragStart(e, columnIndex, itemIndex);
                  console.log('onDragStart');
                }}
                className="w-11/12 py-1 mb-1 text-center"
              >
                <div className="hover:cursor-move group max-w-xs mx-auto rounded-lg p-3 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-[#f7cc10] hover:ring-[#f7cc10]">
                  <span className="flex justify-center">
                    <img
                      // src={item.imgSrc}
                      src="https://source.unsplash.com/random/?"
                      alt="백로그_담당자_이미지"
                      className="w-6 h-6 rounded-full mr-2"
                    />
                    <span class="text-slate-900 group-hover:text-white text-sm font-semibold">
                      {item.text}
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
