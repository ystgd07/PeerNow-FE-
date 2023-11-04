import React from 'react';
import { useQuery } from 'react-query';
import { useProjectModal } from '../../store/store';
import axios from 'axios';

export default function PjtInfoMain() {
  const { setPjtModalData, projectNumber } = useProjectModal((state) => state);

  const { data, isLoading } = useQuery(
    ['pjtModalData', projectNumber],
    async () => {
      const res = await axios.get(
        `http://www.peernow.site/api/project?projectNumber=${projectNumber}`,
        {
          withCredentials: true,
        },
      );
      return res.data;
    },
    {
      enabled: !!projectNumber,
      onSuccess: (data) => {
        console.log('undefined log : ', data);
      },
      onError: (error) => {
        console.log('error : ', error);
      },
      refetchOnWindowFocus: false,
    },
  );
  console.log('pjtModalData data : ', data);

  return (
    <li className="py-3 sm:py-4">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img
            className="w-8 h-8 rounded-full"
            src="/img/je.jfif"
            alt="Neil image"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-medium text-gray-500 truncate dark:text-white">
            BTC 교육생 개발 3팀
          </p>
          <div className="flex items-center ">
            <p className="mr-2 text-sm font-bold text-black truncate dark:text-gray-400">
              이슬비
            </p>
            <p className="text-xs font-semibold text-email">
              iolagvi28@gmail.com
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}
