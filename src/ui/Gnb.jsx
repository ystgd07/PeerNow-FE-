import React, { useState, useEffect, useRef } from 'react';

export default function Gnb() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const closeDropdown = () => {
    setIsDropdownVisible(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    }

    if (isDropdownVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownVisible]);

  return (
    <header className="w-full bg-white pl-5 pr-5 p-1 justify-between items-center drop-shadow relative">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover-bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover-bg-gray-700 dark:focus:ring-gray-600"
              onClick={toggleDropdown}
            ></button>
            <a href="#" className="flex ml-2 md:mr-24">
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                <img src="/logo1.png" alt="로고" className="w-44 h-16" />
                {/* 
                  일반회원 : <img src="/logo1.png" alt="로고" className="w-44 h-16" />
                  프리미엄 회원 : <img src="/logo2.png" alt="로고" className="w-44 h-16" /> 
                 */}
              </span>
            </a>
          </div>
          {/* 로그인 안되면 보여주면 안됨 */}
          <div className="flex items-center">
            <div className="flex items-center ml-3">
              <div ref={dropdownRef}>
                <ui className="list-none flex items-center mr-3">
                  <li>
                    <button
                      type="button"
                      className="flex text-sm bg-gray-800 rounded-full focus-ring-4 focus-ring-gray-300"
                      aria-expanded="false"
                      onClick={toggleDropdown}
                    >
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="w-11 h-11 rounded-full hover:bg-gray-400 focus:ring-3 focus:ring-gray-300 font-medium"
                        src="testImg.jpg"
                        alt="user photo"
                      />
                    </button>
                  </li>
                  <li className="pl-3 text-xl">이슬비</li>
                </ui>
                {isDropdownVisible && (
                  <div
                    className="z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow fixed right-2 top-16"
                    id="dropdown-user"
                  >
                    <div className="px-4 py-3" role="none">
                      <p
                        className="text-gray-400 text-sm dark:text-white"
                        role="none"
                      >
                        BTC 개발자반 3팀
                      </p>
                      <p
                        className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                        role="none"
                      >
                        iolagvi28@gmail.com
                      </p>
                    </div>
                    <ul className="py-1" role="none">
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover-bg-gray-600 dark:hover-text-white"
                          role="menuitem"
                        >
                          설정
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover-bg-gray-600 dark:hover-text-white"
                          role="menuitem"
                        >
                          로그아웃
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
