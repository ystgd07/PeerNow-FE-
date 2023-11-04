import React from 'react';

export default function MyProjectCardTitle({ title }) {
  return (
    <div className="flex">
      <h1 className="text-lg font-bold">{title}</h1>
    </div>
  );
}
