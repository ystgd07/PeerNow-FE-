import React from 'react';
import UserInput from './UserInput';

export default function UserMainCmp() {
  return (
    <div className="mt-6">
      <p className="mb-3 text-xl font-bold">본인 정보</p>
      <div className="border-2 border-collapse border-black rounded-md shadow-lg bg-slate-100 h-2/5 w-Profile">
        <UserInput />
      </div>
    </div>
  );
}
