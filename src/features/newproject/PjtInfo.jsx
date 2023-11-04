import React from 'react';
import PjtinfoTitle from './PjtinfoTitle';
import PjtInfoMain from './PjtInfoMain';
import { useHover } from '../../store/store';
import PjtinfoDetail from './PjtinfoDetail';

export default function PjtInfo() {
  const { hover } = useHover((state) => state);

  return (
    <div className="ml-3">
      <div
        className={`transition-all duration-200 max-w-md p-4   bg-white border-gray-200 rounded-lg shadow-lg t w-screen h-full sm:p-8 dark:bg-gray-500 dark:border-gray-500 ${
          hover ? 'opacity-100' : 'opacity-0'
        } `}
      >
        <PjtinfoTitle />
        <div className="flow-root">
          <ul role="list" className="divide-gray-200 dark:divide-gray-700">
            <div className="flex flex-row-reverse">
              <div>
                <div className="flex items-center gap-3">
                  <p className="text-sm font-bold text-green-500">시작일</p>
                  <p className="text-xs font-semibold text-green-500">
                    2023.11.12
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <p className="text-sm font-bold text-red-500">종료일</p>
                  <p className="text-xs font-semibold text-red-500">
                    2023.11.12
                  </p>
                </div>
              </div>
            </div>
            <PjtinfoDetail />
            <PjtInfoMain />
          </ul>
        </div>
      </div>
    </div>
  );
}
