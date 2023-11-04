import React from 'react';
import Gnb from '../ui/Gnb';
import Snb from '../ui/Snb';
import { Outlet } from 'react-router-dom';
import SideModal from '../features/newproject/SideModal';
import {
  useOepnUpdateModal,
  useOpenMainPage,
  useOpenMypage,
} from '../store/store';
import ModifyModal from '../ui/ModifyModal';

export default function Home() {
  const { openMainPage } = useOpenMainPage((state) => state);
  const { openMypage } = useOpenMypage((state) => state);
  const { openUpdateModal } = useOepnUpdateModal((state) => state);
  console.log('openUpdateModal', openUpdateModal);
  return (
    <>
      <Gnb />
      <div className="relative flex flex-row h-full">
        <Snb />

        <div className={`flex flex-row w-3/4 ${openMypage ? '' : 'ml-10'}`}>
          <Outlet />
          {openUpdateModal && <ModifyModal />}
        </div>
        {openMainPage ? <SideModal /> : ''}
      </div>
    </>
  );
}
