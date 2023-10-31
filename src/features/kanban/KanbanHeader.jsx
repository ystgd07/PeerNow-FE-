import React, { useState } from 'react';
import ProjectList from '../header/ProjectList';

export default function KanbanHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="h-auto">
      <div className="container mx-auto flex justify-start items-center py-4">
        <div className="relative group">
          <button
            id="dropdownDefaultButton"
            onClick={toggleDropdown}
            className="text-slate-800 bg-white mt-3 focus:ring-4 focus:outline-none focus:ring-gray-300 font-extrabold rounded-lg text-3xl mx-6 text-center inline-flex items-center"
            type="button"
          >
            {/* 현재 스프린트 */}
            스프린트
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
              className="z-50 absolute mt-2 mx-16 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
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
      </div>
    </div>
  );
}
