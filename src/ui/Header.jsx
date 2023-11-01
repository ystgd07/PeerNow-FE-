import React, { useState } from 'react';
import ProjectList from '../features/header/ProjectList';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div>
        <div className="container flex items-center justify-start py-4 mx-auto">
          <div className="relative group">
            <div className="mx-10 text-gray-500">프로젝트명</div>
            <button
              id="dropdownDefaultButton"
              onClick={toggleDropdown}
              className="inline-flex items-center mx-16 text-2xl font-extrabold text-center text-black bg-white rounded-lg focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              {/* 현재 프로젝트 */}
              SNOW
              <svg
                className={`w-2.5 h-2.5 ml-2.5 transform ${
                  isDropdownOpen ? 'rotate-180' : 'rotate-0'
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            {/* 프로젝트 선택 드롭박스 */}
            {isDropdownOpen && (
              <div
                id="dropdown"
                className="absolute mx-16 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <ProjectList />
                  </li>
                  <li>
                    <ProjectList />
                  </li>
                </ul>
              </div>
            )}
          </div>
          {/* 프로젝트 수정 */}
          <a
            href="#"
            className="flex justify-end p-4 px-5 mr-10"
            style={{ marginLeft: 'auto' }}
          >
            &#8942;
          </a>
        </div>
      </div>
    </header>
  );
}
