import React from 'react';

export default function FormInput({ ...props }) {
  return (
    <div>
      <label
        for="email"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {props.label1}
      </label>
      <input
        type="email"
        name="email"
        id="email"
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={`${
          props.label1.slice(0, 8) === 'PASSWORD' ? '패스워드' : '아이디'
        }를 입력해주세요`}
        required=""
      />
    </div>
  );
}
