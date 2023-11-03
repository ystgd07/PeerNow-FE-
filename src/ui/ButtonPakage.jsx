import React from 'react';

export default function ButtonPakage({ value, event, disabled }) {
  console.log('ButtonPakage disabled value', value);

  return (
    <div
      className={`ext-white ${
        !disabled ? 'bg-blue-700' : 'bg-slate-400 opacity-40'
      } focus:ring-2 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 w-full dark:hover:bg-blue-700 dark:focus:ring-blue-800   ${
        disabled ? 'cursor-not-allowed' : 'cursor-pointer'
      }`}
      onClick={event}
      disabled={disabled}
    >
      <p className="block text-slate-300"> {value}</p>
    </div>
  );
}
