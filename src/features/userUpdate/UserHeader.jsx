import React from 'react';

export default function UserHeader() {
  return (
    <>
      <p className="mb-3 text-lg font-bold">프로필 사진</p>
      <div className="border-2 border-collapse border-black rounded-md shadow-lg bg-slate-100 h-2/5">
        <div className="relative w-full h-3/5 bg-amber-400">
          <p className="absolute top-1/2 left-6">헤더 이미지</p>
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
