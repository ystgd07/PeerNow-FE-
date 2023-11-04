import React from 'react';

export default function MyProjectCardFooter({ strDate, endDate }) {
  return (
    <div className="flex flex-col-reverse h-full">
      <p className="flex flex-row-reverse mb-3 text-gray">
        {strDate}-{endDate}
      </p>
    </div>
  );
}
