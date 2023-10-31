import React, { useState } from 'react';
import ButtonPakage from '../../ui/ButtonPakage';

export default function SideModalMain() {
  const [pjtName, setPjtName] = useState('');
  const [pjtValid, setPjtValid] = useState(true);

  const mouseOutEvent = () => {
    if (pjtName.length > 0) {
      setPjtValid(true);
    } else {
      setPjtValid(false);
    }
  };

  return (
    <div>
      <form>
        <div className="mb-6">
          <input
            type="email"
            id="email"
            className={`shadow-sm bg-gray-50 border ${
              pjtValid ? 'border-gray-300' : 'border-red-500'
            } text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${
              pjtValid ? 'dark:focus:ring-blue-500' : 'dark:focus:ring-red-600'
            } dark:focus:border-blue-500 dark:shadow-sm-light focus:outline-none focus:ring `}
            placeholder="* 프로젝트 이름은 무엇입니까?"
            value={pjtName}
            onChange={(e) => setPjtName(e.target.value)}
            onMouseOut={mouseOutEvent}
            required
          />
          {pjtValid ? (
            ''
          ) : (
            <p class="mt-1 text-sm text-red-600 dark:text-red-500 p-1">
              <span class="font-medium">Oh, snapp!</span> Some error message.
            </p>
          )}
        </div>

        <div className="mb-6">
          <input
            type="password"
            id="password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-200 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="프로젝트에 대한 설명을 적으세요."
            required
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            id="repeat-password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="*기간을 설정해주세요."
            required
          />
        </div>

        <ButtonPakage value={'다음'} />
      </form>
    </div>
  );
}
