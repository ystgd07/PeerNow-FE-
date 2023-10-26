import React from 'react';
import PjtinfoTitle from './PjtinfoTitle';
import PjtInfoMain from './PjtInfoMain';
import { useHover } from '../../store/store';

export default function PjtInfo() {
  const { hover } = useHover((state) => state);

  return (
    <div className="ml-3 ">
      <div
        className={`transition-all duration-200 max-w-md p-4  bg-white border-gray-200 rounded-lg shadow-lg t w-screen h-fit sm:p-8 dark:bg-gray-500 dark:border-gray-500 ${
          hover ? 'opacity-100' : 'opacity-0'
        } `}
      >
        <PjtinfoTitle />
        <div className="flow-root">
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            <PjtInfoMain />
          </ul>
        </div>
      </div>
    </div>
  );
}
