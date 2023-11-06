import React from 'react';
import UserStatusItem from './UserStatusItem';
import UserStatusTitle from './UserStatusTitle';

export default function UserStatusOfPjt() {
  return (
    <div className="mt-3">
      <p className="mb-3 text-xl font-bold">프로젝트 상태</p>
      <div className="border-2 border-collapse border-black rounded-md shadow-lg bg-slate-100 ">
        <UserStatusItem />
      </div>
    </div>
  );
}
