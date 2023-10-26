import React from 'react';
import { HiPlusCircle } from 'react-icons/hi';
import { useProjectModal } from '../../store/store';

export default function Button() {
  const { setPjtModal, pjtModal } = useProjectModal((state) => state);

  return (
    <HiPlusCircle
      className={`ml-12 transition-all duration-200 cursor-pointer w-11 h-11 text-stone-800 z-50 sticky bottom-0 left-0`}
      onClick={setPjtModal}
      style={{
        transform: `${pjtModal ? 'rotate(45deg)' : 'rotate(90deg)'} `,
        scale: `${pjtModal ? '0.9' : '1'} `,
        zIndex: 30,
        position: 'sticky',
        bottom: '20',
        left: '20',
      }}
    />
  );
}
