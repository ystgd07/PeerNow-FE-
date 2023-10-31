import React, { useRef } from 'react';
import Progress from './Progress';

export default function Column({ column, columns, setColumns, columnIndex }) {
  const dragColumn = useRef();
  const dragItem = useRef();

  const dragStart = (e, columnIndex, itemIndex) => {
    dragColumn.current = columnIndex;
    dragItem.current = itemIndex;
  };

  const dragEnter = (e, columnIndex, itemIndex) => {
    if (dragColumn.current === columnIndex) return; // 같은 열 내에서는 이동하지 않음
    const newColumns = [...columns];

    if (newColumns[columnIndex].items) {
      const [draggedItem] = newColumns[dragColumn.current].items.splice(
        dragItem.current,
        1,
      );
      newColumns[columnIndex].items.splice(itemIndex, 0, draggedItem);
      setColumns(newColumns);
      dragColumn.current = columnIndex;
      dragItem.current = itemIndex;
    } else {
      // 빈 열에 대한 처리
      newColumns[columnIndex].items = [
        newColumns[dragColumn.current].items[dragItem.current],
      ];
      newColumns[dragColumn.current].items.splice(dragItem.current, 1);
      setColumns(newColumns);
      dragColumn.current = columnIndex;
      dragItem.current = 0;
    }
  };

  return (
    <div>
      <Progress
        value={column.title}
        color={`bg-${
          column.title === '진행 예정'
            ? 'red'
            : column.title === '진행 중'
            ? 'blue'
            : 'green'
        }-500`}
      />
      <div>
        {column.items &&
          column.items.map((item, itemIndex) => (
            <div
              key={item.id}
              draggable
              onDragStart={(e) => dragStart(e, columnIndex, itemIndex)}
              onDragEnter={(e) => dragEnter(e, columnIndex, itemIndex)}
            >
              <div className="border border-gray-300 rounded-md text-center py-2 w-11/12 mb-1">
                <a href="#">
                  <span className="flex justify-center">
                    <img
                      src={item.imgSrc}
                      alt="백로그_담당자_이미지"
                      className="rounded-full w-6 h-6"
                    />
                    <span className="ml-1">{item.text}</span>
                  </span>
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
