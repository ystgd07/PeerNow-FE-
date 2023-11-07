import React from 'react';
import UserStatusItem from './UserStatusItem';
import { useProject, useUserMain } from '../../store/UserMain/store';
import { useQuery } from 'react-query';
import axios from 'axios';
import { fetchInviteProject } from '../../apis/apiProject';

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
      <p className="mb-3 text-xl font-bold">프로젝트 상태</p>
      <div className="border-2 border-collapse border-black rounded-md shadow-lg bg-slate-100 ">
        {projectStatusList?.datalist?.map((item, index) => {
          return <UserStatusItem key={index} item={item} />;
        })}
      </div>
    </div>
  );
}
