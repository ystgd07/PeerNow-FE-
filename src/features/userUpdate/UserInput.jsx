import React from 'react';

export default function UserInput() {
  return (
    <div className="p-5 ">
      <div className="mt-2 mb-3 text-xl font-bold text-slate-500">
        <p>이메일</p>
      </div>
      <div className="flex justify-between p-2 border-4 rounded-lg border-slate-200">
        <p>saddsad@naver.com</p>
        <p className="font-bold text-blue-500 cursor-pointer hover:text-blue-600 hover:scale-110">
          수정
        </p>
      </div>
      <div className="mt-2 mb-3 text-xl font-bold text-slate-500">
        <p>전화번호</p>
      </div>
      <div className="flex justify-between p-2 border-4 rounded-lg border-slate-200">
        <p>010-3333-3333</p>
        <p className="font-bold text-blue-500 cursor-pointer hover:text-blue-600 hover:scale-110">
          수정
        </p>
      </div>
      <div className="mt-2 mb-3 text-xl font-bold text-slate-500">
        <p>소속</p>
      </div>
      <div className="flex justify-between p-2 border-4 rounded-lg border-slate-00">
        <p>btc</p>
        <p className="font-bold text-blue-500 cursor-pointer hover:text-blue-600 hover:scale-110">
          수정
        </p>
      </div>
    </div>
  );
}
