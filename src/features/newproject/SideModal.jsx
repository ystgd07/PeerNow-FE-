import React from 'react';
import SideModalHeader from './SideModalHeader';
import SideModalMain from './SideModalMain';
import { useProjectModal } from '../../store/store';

export default function SideModal() {
  const { pjtModal } = useProjectModal((state) => state);

  return (
    <div
      className={`h-screen transition-all duration-200 z-10  p-5 bg-white border-l-8 shadow-lg w-96 rounded-xl ${
        pjtModal ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <SideModalHeader />
      <SideModalMain />
    </div>
  );
}
