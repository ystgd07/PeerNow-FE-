import React from 'react';
import { Link } from 'react-router-dom';

export default function PjtinfoTitle() {
  return (
    <div className="flex items-center justify-between mb-4">
      <p className="text-2xl font-bold leading-none text-gray-900  dark:text-white">
        S.NOW
      </p>
      <p className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
        <Link>View all</Link>
      </p>
    </div>
  );
}
