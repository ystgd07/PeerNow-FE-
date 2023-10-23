import React from 'react';

export default function PjtInfoMain() {
  return (
    <li class="py-3 sm:py-4">
      <div class="flex items-center space-x-4">
        <div class="flex-shrink-0">
          <img
            class="w-8 h-8 rounded-full"
            src="/img/je.jfif"
            alt="Neil image"
          />
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-xs font-medium text-gray-500 truncate dark:text-white">
            BTC 교육생 개발 3팀
          </p>
          <div className="flex items-center ">
            <p class="text-sm mr-2 text-black font-bold truncate dark:text-gray-400">
              이슬비
            </p>
            <p className="text-xs font-semibold text-email">
              iolagvi28@gmail.com
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}
