import React, { useState } from 'react';

export default function SideModalList() {
  return (
    <>
      <li className="py-3 list-none sm:py-4">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <img
              className="w-8 h-8 rounded-full"
              src="/img/je.jfif"
              alt="Neil"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-gray-500 truncate dark:text-white">
              BTC 교육생 개발 3팀
            </p>
            <div className="flex items-center ">
              <p className="mr-2 text-sm font-bold text-black truncate dark:text-gray-400">
                이슬비
              </p>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}
