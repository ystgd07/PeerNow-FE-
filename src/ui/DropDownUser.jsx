import React from 'react';
import { GrUserSettings } from 'react-icons/gr';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { useUserMain } from '../store/UserMain/store';

export default function DropDownUser() {
  const { userMainData, setIsOpenDropdown } = useUserMain((state) => state);

  return (
    <div
      className="absolute top-0 right-0 w-48 p-4 bg-white border-2 divide-y rounded-md shadow-md cursor-pointer"
      onClick={() => {
        console.log('hihihi');
      }}
    >
      <p className="mb-3 text-xs truncate">{userMainData.mail}</p>
      <div>
        <div className="flex flex-row items-center gap-2 cursor-pointer">
          <p
            className="mt-3 text-sm font-bold "
            onClick={(e) => {
              e.stopPropagation();
              console.log('설정');
            }}
          >
            설정
          </p>
          <GrUserSettings className="mt-3"></GrUserSettings>
        </div>
        <div className="flex flex-row items-center gap-2 cursor-pointer">
          <p
            className="mt-3 text-sm font-bold "
            onClick={(e) => {
              e.stopPropagation();
              console.log('로그아웃');
            }}
          >
            로그아웃
          </p>
          <RiLogoutBoxRLine className="mt-3"></RiLogoutBoxRLine>
        </div>
      </div>
    </div>
  );
}
