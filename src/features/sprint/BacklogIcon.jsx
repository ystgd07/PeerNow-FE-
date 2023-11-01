import React from 'react';

export default function BacklogIcon() {
  const items = [
    { id: 1, text: '화면 설계서 만들기', imgSrc: 'testImg.jpg' },
    { id: 2, text: '화면 설계서 만들기', imgSrc: 'testImg.jpg' },
    { id: 3, text: '화면 설계서 만들기', imgSrc: 'testImg.jpg' },
    { id: 4, text: '화면 설계서 만들기', imgSrc: 'testImg.jpg' },
    { id: 5, text: '화면 설계서 만들기', imgSrc: 'testImg.jpg' },
    { id: 6, text: '화면 설계서 만들기', imgSrc: 'testImg.jpg' },
    { id: 7, text: '화면 설계서 만들기', imgSrc: 'testImg.jpg' },
    { id: 8, text: '화면 설계서 만들기', imgSrc: 'testImg.jpg' },
    { id: 9, text: '화면 설계서 만들기', imgSrc: 'testImg.jpg' },
    { id: 10, text: '화면 설계서 만들기', imgSrc: 'testImg.jpg' },
    { id: 11, text: '화면 설계서 만들기', imgSrc: 'testImg.jpg' },
    { id: 12, text: '화면 설계서 만들기', imgSrc: 'testImg.jpg' },
    { id: 13, text: '화면 설계서 만들기', imgSrc: 'testImg.jpg' },
    { id: 14, text: '화면 설계서 만들기', imgSrc: 'testImg.jpg' },
    { id: 15, text: '화면 설계서 만들기', imgSrc: 'testImg.jpg' },
    { id: 16, text: '화면 설계서 만들기', imgSrc: 'testImg.jpg' },
    { id: 17, text: '화면 설계서 만들기', imgSrc: 'testImg.jpg' },
    { id: 18, text: '화면 설계서 만들기', imgSrc: 'testImg.jpg' },
    { id: 19, text: '화면 설계서 만들기', imgSrc: 'testImg.jpg' },
    { id: 20, text: '화면 설계서 만들기', imgSrc: 'testImg.jpg' },
    { id: 21, text: '화면 설계서 만들기', imgSrc: 'testImg.jpg' },
    { id: 22, text: '화면 설계서 만들기', imgSrc: 'testImg.jpg' },
    { id: 23, text: '화면 설계서 만들기', imgSrc: 'testImg.jpg' },
    { id: 24, text: '화면 설계서 만들기', imgSrc: 'testImg.jpg' },
    { id: 25, text: '화면 설계서 만들기', imgSrc: 'testImg.jpg' },
    { id: 26, text: '화면 설계서 만들기', imgSrc: 'testImg.jpg' },
    { id: 27, text: '화면 설계서 만들기', imgSrc: 'testImg.jpg' },
    { id: 28, text: '화면 설계서 만들기', imgSrc: 'testImg.jpg' },
    { id: 29, text: '화면 설계서 만들기', imgSrc: 'testImg.jpg' },
    { id: 30, text: '화면 설계서 만들기', imgSrc: 'testImg.jpg' },
    { id: 31, text: '화면 설계서 만들기', imgSrc: 'testImg.jpg' },
    { id: 32, text: '화면 설계서 만들기', imgSrc: 'testImg.jpg' },
    { id: 33, text: '화면 설계서 만들기', imgSrc: 'testImg.jpg' },
  ];

  return (
    <>
      {items.map((item) => (
        <div className="border border-gray-300 rounded-md text-center py-2 w-11/12 mb-1">
          <a href="#">
            <span className="flex justify-center">
              <img
                src="testImg.jpg"
                alt="백로그_담당자_이미지"
                className="rounded-full w-6 h-6"
              />
              <span className="ml-1">백로그 이름</span>
            </span>
          </a>
        </div>
      ))}
    </>
  );
}
