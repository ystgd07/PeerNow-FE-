import React from 'react';

export default function UserHeader() {
  return (
    <>
      <p className="mb-3 text-xl font-bold">프로필 사진</p>
      <div className="border-2 border-collapse border-black rounded-md shadow-lg h-Profile w-Profile bg-slate-100">
        <div className="relative w-full h-3/5 bg-gradient-to-r from-amber-500 to-slate-100">
          <img
            className="absolute w-24 h-24 border-2 border-white rounded-full cursor-pointer top-1/3 left-10"
            src="/img/je.jfif"
            alt="Neil image"
          />
        </div>
        <div className="flex flex-row-reverse p-3">
          <div className="mt-3">
            <p>프로필 사진</p>
            <p>프로필 수정</p>
          </div>
        </div>
      </div>
    </>
  );
}
