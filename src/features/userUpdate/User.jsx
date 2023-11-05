import React from 'react';
import UserMainCmp from './UserMainCmp';
import UserHeader from './UserHeader';
import UserStatusOfPjt from './UserStatusOfPjt';

export default function User() {
  return (
    <div className="w-full h-full p-10 overflow-y-auto bg-white border-2 rounded-lg shadow-md border-amber-500 scrollbar-thin scrollbar-thumb-amber-500">
      <UserHeader />
      <UserMainCmp />
      <UserStatusOfPjt />
    </div>
  );
}
