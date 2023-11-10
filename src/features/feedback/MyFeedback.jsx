import React from 'react';

export default function MyFeedback() {
  const items = [
    {
      name: '멋집니다',
    },
    {
      name: '잘합니다',
    },
    {
      name: '죠습니다',
    },
  ];

  return (
    <>
      <div className="bg-white rounded-md mt-5">
        <div className="p-2 flex flex-row items-center">
          <div className="border-r-2">
            <div>🤗</div>
            {items.map((item, index) => (
              <div className="text-center text-base m-3">
                <ul>
                  <li className="font-semibold">{item.name}</li>
                </ul>
              </div>
            ))}
          </div>
          <div>🧐</div>
        </div>
      </div>
    </>
  );
}
