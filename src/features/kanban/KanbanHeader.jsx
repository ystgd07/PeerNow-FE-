import React, { useState } from 'react';
import {
  AllThisSprints,
  useSelectedSprint,
} from '../../store/SprintStore/store';
import KanbanListOfSprint from './KanbanListOfSprint';

export default function KanbanHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { datalist, setDatalist } = AllThisSprints((state) => state);

  const { selectedSprintTitle, selectedValidate, setSelectedValidate } =
    useSelectedSprint((state) => state);

  return (
    <div className="h-auto z-30">
      <div className="container mx-auto flex justify-start items-center py-4">
        <div className="relative group">
          <div className="text-gray-500">현재의 스프린트</div>
          <button
            id="dropdownDefaultButton"
            onClick={setSelectedValidate}
            className="text-slate-800 bg-white mt-1 focus:ring-4 focus:outline-none focus:ring-gray-300 font-extrabold rounded-lg text-3xl mx-6 text-center inline-flex items-center"
            type="button"
          >
            {/* 현재 스프린트 */}
            {selectedSprintTitle?.length === 0
              ? datalist[0]?.title
              : selectedSprintTitle}
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
          {selectedValidate && (
            <div
              id="dropdown"
              className="z-30 absolute mt-2 mx-16 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                {datalist?.map((e, idx) => (
                  <KanbanListOfSprint key={idx} list={e} />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
