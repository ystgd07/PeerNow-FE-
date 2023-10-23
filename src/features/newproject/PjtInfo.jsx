import React from 'react';
import PjtinfoTitle from './PjtinfoTitle';
import PjtInfoMain from './PjtInfoMain';

export default function PjtInfo() {
  return (
    <div className="mt-4 ml-3">
      <div class="w-PjtInfo h-PjtInfo max-w-md p-4 bg-white  border-gray-200 rounded-lg shadow-lg sm:p-8 dark:bg-gray-500 dark:border-gray-500">
        <PjtinfoTitle />
        <div class="flow-root">
          <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <PjtInfoMain />
          </ul>
        </div>
      </div>
    </div>
  );
}
