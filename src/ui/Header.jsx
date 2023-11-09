import React, { useState, useEffect } from 'react';
import ProjectList from '../features/header/ProjectList';
import {
  useBackLogPageRes,
  useProjectInBackLog,
} from '../store/BackLogStore/store';
import { PjtNumNow } from '../store/header/store';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { pjtData } = useProjectInBackLog((state) => state);
  const { nowNum, setNowNum } = PjtNumNow((state) => state);
  const { currentProjectNumber } = useBackLogPageRes((state) => state);
  // useEffect(() => {
  //   if (pjtData.length > 0) {
  //     setNowNum(pjtData[0].no);
  //   }
  // }, [pjtData]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // const handleProjectSelect = (project) => {
  //   setNowNum(project.no);
  //   setIsDropdownOpen(false);
  // };

  console.log('[Header] nowNum ===> ', nowNum);
  console.log('currentProjectNumber  :', currentProjectNumber);
  return (
    <header className="bg-white shadow-md w-full">
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
              <p>
                {currentProjectNumber === 1
                  ? pjtData[0].title
                  : pjtData[currentProjectNumber - 1].title}
              </p>
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            {/* 프로젝트 선택 드롭박스 */}
            {isDropdownOpen && (
              <div
                id="dropdown"
                className="absolute mx-16 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 duration-1000"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  {pjtData?.map((e, idx) => (
                    <ProjectList key={idx} pjt={e} />
                  ))}
                </ul>
              </div>
            )}
          </div>
          {/* 프로젝트 수정 */}
          <p
            className="flex justify-end p-4 px-5 mr-10"
            style={{ marginLeft: 'auto' }}
          >
            &#8942;
          </p>
        </div>
      </div>
    </header>
  );
}
