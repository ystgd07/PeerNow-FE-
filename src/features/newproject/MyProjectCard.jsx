import React from 'react';

import MyProjectCardTitle from './MyProjectCardTitle';
import MyProjectCardFooter from './MyProjectCardFooter';
import { useHover, useProjectModal } from '../../store/store';
import MyProjectCardContent from './MyProjectCardContent';

export default function MyProjectCard({ res }) {
  const { setHover } = useHover((state) => state);
  const { pjtModal } = useProjectModal((state) => state);
  const { setProjectNumber } = useProjectModal((state) => state);

  return (
    <div
      className={`max-w-md justify-center items-center bg-white border-gray-200 rounded-lg shadow-lg w-PjtCard h-16  dark:bg-gray-500 dark:border-gray-500 ${
        !pjtModal
          ? 'hover:bg-section hover:opacity-80 dark:hover:bg-gray-600 hover:scale-95'
          : ''
      }`}
      onClick={
        !pjtModal
          ? () => {
              setHover();
              setProjectNumber(res.no);
            }
          : null
      }
      id={res.no}
    >
      <div className="flex justify-between p-5">
        <MyProjectCardTitle title={res.title} />
        <MyProjectCardContent content={res.detail} />
        <MyProjectCardFooter strDate={res.start_date} endDate={res.end_date} />
      </div>
    </div>
  );
}
