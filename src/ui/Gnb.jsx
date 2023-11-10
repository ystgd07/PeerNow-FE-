import React, { useState, useEffect, useRef } from 'react';
import { useUserMain } from '../store/UserMain/store';
import { GrUserSettings } from 'react-icons/gr';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export default function Gnb() {
  const { userMainData, setIsOpenDropdown } = useUserMain((state) => state);

  return (
    <header
      className="relative items-center justify-between w-full p-1 pl-5 pr-5 bg-white cursor-pointer drop-shadow"
      onClick={() => {
        setIsOpenDropdown();
      }}
    >
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover-bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover-bg-gray-700 dark:focus:ring-gray-600"
            ></button>
            <p className="flex ml-2 md:mr-24">
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                <img src="/logo1.png" alt="로고" className="h-16 w-44" />
                {/* 
                  일반회원 : <img src="/logo1.png" alt="로고" className="h-16 w-44" />
                  프리미엄 회원 : <img src="/logo2.png" alt="로고" className="h-16 w-44" /> 
                 */}
              </span>
            </p>
          </div>
          {/* 로그인 안되면 보여주면 안됨 */}
          <div className="flex items-center">
            <div className="flex items-center ml-3">
              <div>
                <ui className="flex items-center mr-3 list-none">
                  <li>
                    <button
                      type="button"
                      className="flex text-sm bg-gray-800 rounded-full focus-ring-4 focus-ring-gray-300"
                      aria-expanded="false"
                    >
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="font-medium rounded-full w-11 h-11 hover:bg-gray-400 focus:ring-3 focus:ring-gray-300"
                        src="testImg.jpg"
                        alt="user photo"
                      />
                    </button>
                  </li>
                  <li className="pl-3 text-xl">{userMainData.name}</li>
                </ui>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
