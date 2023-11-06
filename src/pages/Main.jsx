import React, { useEffect } from 'react';
import Title from '../features/newproject/Title';
import MyProjectCard from '../features/newproject/MyProjectCard';
import PjtInfo from '../features/newproject/PjtInfo';
import { useProjectModal } from '../store/store';
import { useQuery } from 'react-query';
import axios from 'axios';

export default function Main() {
  const { setPjtModalFalse, setPjtModalData } = useProjectModal(
    (state) => state,
  );

  const { data, isLoading } = useQuery(
    ['pjtCard'],
    async () => {
      const res = await axios.get(`http://www.peernow.site/api/project/list`, {
        withCredentials: true,
      });
      return res;
    },
    {
      onSuccess: (data) => {
        console.log('undefined log : ', data);
      },
      onError: (error) => {
        console.log('error : ', error);
      },
      refetchOnWindowFocus: false,
    },
  );
  console.log('pjtCard : ', data);

  return (
    <div className={`relative flex flex-row justify-center`}>
      <div className={`flex flex-col`}>
        <Title />
        <div
          className="flex flex-col items-center justify-center"
          onClick={setPjtModalFalse}
        >
          <div className="flex rl">
            <div className="flex flex-col h-64 gap-3 p-6 overflow-y-scroll bg-white rounded-lg shadow-sm scrollbar-thumb-amber-400 scrollbar-thumb-rounded-full scrollbar-track-slate-50 scrollbar-thin ">
              {!isLoading &&
                data?.data?.datalist?.map((res, idx) => (
                  <MyProjectCard res={res} key={idx} />
                ))}
            </div>
            <PjtInfo />
          </div>
        </div>
      </div>
    </div>
  );
}
