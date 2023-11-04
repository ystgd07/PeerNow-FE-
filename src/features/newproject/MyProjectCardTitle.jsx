import React from 'react';

export default function MyProjectCardTitle({ title }) {
  return (
    <div className="flex items-center w-2/5 mr-3 ">
      <h1 className="text-lg font-bold truncate">{title}</h1>
    </div>
  );
}
