import React, { useEffect } from 'react';
import Title from '../features/newproject/Title';
import MyProjectCard from '../features/newproject/MyProjectCard';
import PjtInfo from '../features/newproject/PjtInfo';
import { useProjectModal } from '../store/store';
import { useQuery } from 'react-query';
import axios from 'axios';
import CreatePjtSkeleton from '../skeleTon/CreatePjtSkeleton';
import Skeleton from 'react-loading-skeleton';
import ContentLoader, { Instagram } from 'react-content-loader';
export default function Main() {
  const { setPjtModalFalse, setPjtModalData } = useProjectModal(
    (state) => state,
  );

  const { data, isLoading, refetch } = useQuery(
    ['pjtCard'],
    async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_API_DOMAIN}/api/project/list`,
        {
          withCredentials: true,
        },
      );
      return res;
    },
    {
      enabled: false,
      onSuccess: (data) => {
        console.log('undefined log : ', data);
      },
      onError: (error) => {
        console.log('error : ', error);
      },
      refetchOnWindowFocus: false,
    },
  );

  useEffect(() => {
    setTimeout(refetch, 1200);
  }, []);
  console.log('pjtCard : ', data);

  return (
    <div className={`relative flex flex-row justify-center ml-5`}>
      <div className={`flex flex-col`}>
        <Title />
        <div
          className="flex flex-col items-center justify-center"
          onClick={setPjtModalFalse}
        >
          {data !== undefined ? (
            <div className="flex rl">
              <div className="flex flex-col h-pjtCardSection border-2 border-slate-200 gap-3 p-6 overflow-y-scroll bg-slate-50 shadow-lg rounded-lg  scrollbar-thumb-amber-400 scrollbar-thumb-rounded-full scrollbar-track-slate-50 scrollbar-thin ">
                {!isLoading &&
                  data?.data?.datalist?.map((res, idx) => (
                    <MyProjectCard res={res} key={idx} />
                  ))}
              </div>
              <PjtInfo />
            </div>
          ) : (
            <div className="w-96 h-64">
              <Instagram />
            </div>
          )}
        </div>
        {/* <Skeleton></Skeleton> */}
      </div>
    </div>
  );
}
