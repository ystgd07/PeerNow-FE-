import React from 'react';
import UserStatusItem from './UserStatusItem';
import { useProject, useUserMain } from '../../store/UserMain/store';
import { useQuery } from 'react-query';
import axios from 'axios';
import { fetchInviteProject } from '../../apis/apiProject';
import { PiProjectorScreenChart } from 'react-icons/pi';

export default function UserStatusOfPjt() {
  const { setProjectDataList, projectDataList } = useProject((state) => state);

  const { data: projectStatusList, isLoading } = useQuery(
    ['projectStatus'],
    fetchInviteProject,
    {
      onSuccess: (data) => {
        console.log('undefined log1 : ', data);
      },
      onError: (error) => {
        console.log('error : ', error);
      },
      refetchOnWindowFocus: false,
    },
  );

  return (
    <div className="mt-3">
      <div className="flex items-center mt-5 gap-3 mb-4">
        <PiProjectorScreenChart className="text-3xl" />
        <p className="text-xl font-bold">프로젝트 상태</p>
      </div>
      <div className=" p-5 border-2 border-collapse border-slate-200 rounded-md shadow-lg bg-white ">
        {projectStatusList?.datalist?.map((item, index) => {
          return <UserStatusItem key={index} item={item} />;
        })}
      </div>
    </div>
  );
}
