import React from 'react';
import Gnb from '../ui/Gnb';
import Snb from '../ui/Snb';
import { Outlet } from 'react-router-dom';
import SideModal from '../features/newproject/SideModal';

export default function Home() {
  return (
    <>
      <Gnb />
      <div className="relative flex flex-row">
        <Snb />

        <div className="flex flex-row w-3/4 ml-10">
          <Outlet />
        </div>

        <SideModal />
      </div>
    </>
  );
}
