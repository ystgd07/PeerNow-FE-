import React from 'react';

export default function UserStatusItem() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between px-5 py-2 border-b-2 border-black">
        <div className="flex flex-row items-center">
          <div className="mr-4">
            <img
              className="rounded-full w-11 h-11"
              src="/img/je.jfif"
              alt="Neil image"
            />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-xl font-bold">양성수(PM)</p>
            <p className="text-sm font-semibold text-slate-400">btc 개발자</p>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <div className="flex flex-col items-center">
            <p className="text-xl font-bold">PeerNow</p>
            <p className="text-sm font-semibold truncate text-slate-400">
              peerNow프로젝트 입니다.
            </p>
          </div>
        </div>
        <div className="flex">
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 mr-5 text-sm font-semibold text-white transition-all bg-green-400 border border-transparent rounded-md hover:text-white hover:bg-green-500 focus:outline-none focus:ring-2 ring-offset-white focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
          >
            승낙
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white transition-all bg-red-400 border border-transparent rounded-md hover:text-white hover:bg-red-500 focus:outline-none focus:ring-2 ring-offset-white focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
}
