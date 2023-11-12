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
import { useQuery } from 'react-query';
import { fetchUserData } from '../apis/apiUserData';
import { useUserMain } from '../store/UserMain/store';
import DropDownUser from '../ui/DropDownUser';

export default function Home() {
  const { openMainPage } = useOpenMainPage((state) => state);
  const { openMypage } = useOpenMypage((state) => state);
  const { openUpdateModal } = useOepnUpdateModal((state) => state);
  const { setUserMainData, userMainData, setIsOpenDropdown, isOpenDropdown } =
    useUserMain((state) => state);

  const { data: userData, isLoadingUserData } = useQuery(
    ['userData'],
    fetchUserData,
    {
      onSuccess: (data) => {
        setUserMainData(data?.data);
        console.log('userData : ', data);
      },
      onError: (error) => {
        console.log('error : ', error);
      },
    },
  );
  console.log('isOpenDropdown : ', isOpenDropdown);
  return (
    <>
      <Gnb />
      <div className="relative flex flex-row h-screen">
        <Snb />

        <div className={`flex flex-row  w-full ${openMypage ? '' : ''} `}>
          <Outlet />
          {openUpdateModal && <ModifyModal />}
        </div>

        {isOpenDropdown && <DropDownUser />}
        {openMainPage ? <SideModal /> : ''}
      </div>
    </>
  );
}
