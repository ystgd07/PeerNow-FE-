import React from 'react';
import { useUserMain } from '../../store/UserMain/store';

export default function UserHeader() {
  const { userMainData, setIsOpenDropdown } = useUserMain((state) => state);
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
          <div className="flex flex-row items-center mt-3">
            <p className="mr-3 text-lg font-bold">
              {userMainData.name.toUpperCase()}
            </p>
            <p className="text-sm font-semibold">({userMainData.mail})</p>
          </div>
        </div>
      </div>
    </>
  );
}
