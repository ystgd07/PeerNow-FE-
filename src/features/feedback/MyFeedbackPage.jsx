import React from 'react';
import { useProjectInBackLog } from '../../store/BackLogStore/store';
import { useQuery } from 'react-query';
import { fetchBackLogPjtData } from '../../apis/backLogApis';
import MyFeedback from './MyFeedback';
import Header from '../../ui/Header';

export default function MyFeedbackPage() {
  // Header용
  const { setPjtDetailData, setPjtData } = useProjectInBackLog(
    (state) => state,
  );
  const { data: PjtData, isLoading: pjtDataLoading } = useQuery(
    ['fechingPjtDataInB'],
    fetchBackLogPjtData,
    {
      onSuccess: (data) => {
        console.log('data :', data);
        setPjtData(data.data.datalist);
      },
    },
  );

  return (
    <>
      <div className="w-full h-auto">
        <Header />
        <MyFeedback />
      </div>
    </>
  );
}
