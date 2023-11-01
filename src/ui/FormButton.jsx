import React from 'react';

export default function FormButton({ checkValid, btnName, event }) {
  return (
    <div
      className={`w-full text-black bg-amber-400
        ${
          checkValid
            ? 'bg-amber-400 border-amber-400 border-4'
            : 'bg-slate-400 opacity-40 border-slate-400 border-4'
        }
    focus:ring-4 focus:outline-none focus:ring-black-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-black-600 dark:hover:bg-black-700 dark:focus:ring-black-800 ${
      checkValid ? 'cursor-pointer' : 'cursor-not-allowed'
    }`}
      disabled={checkValid}
      onClick={event}
    >
      <p className="text-lg font-bold text-white">{btnName}</p>
    </div>
  );
}
