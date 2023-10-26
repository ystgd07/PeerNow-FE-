import React, { useState } from 'react';

import MyProjectCardTitle from './MyProjectCardTitle';
import MyProjectCardFooter from './MyProjectCardFooter';
import { useHover, useProjectModal } from '../../store/store';

export default function MyProjectCard() {
  const { setHover } = useHover((state) => state);
  const { pjtModal } = useProjectModal((state) => state);

  return (
    <div
      className={`max-w-md p-4 bg-white border-gray-200 rounded-lg shadow-lg w-PjtCard h-PjtCard sm:p-8 dark:bg-gray-500 dark:border-gray-500 ${
        !pjtModal
          ? 'hover:bg-section hover:opacity-80 dark:hover:bg-gray-600 hover:scale-95'
          : ''
      }`}
      onClick={!pjtModal ? setHover : null}
    >
      <MyProjectCardTitle />
      <MyProjectCardFooter />
    </div>
  );
}
