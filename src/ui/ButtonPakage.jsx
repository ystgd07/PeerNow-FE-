import React from 'react';

export default function ButtonPakage({ isLoading, color, value }) {
  return (
    <div
      className={`ext-white bg-blue-700 focus:ring-2 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointe`}
    >
      <p className="text-slate-300"> {value}</p>
    </div>
  );
}
