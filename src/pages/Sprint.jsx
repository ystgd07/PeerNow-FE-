import Header from '../ui/Header';
import { useEffect } from 'react';
import { useOpenMainPage, useOpenMypage } from '../store/store';
import Title from '../features/mypage/Title';
import NewSprintCreatePage from '../features/sprint/NewSprintCreatePage';
import Button from '../features/sprint/Button';
import { PjtNumNow } from '../store/header/store';
import { useQuery } from 'react-query';
import { useProjectInBackLog } from '../store/BackLogStore/store';
import { fetchBackLogPjtData } from '../apis/backLogApis';

export default function Sprint() {
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

  const { setOpenMainPage, openMainPage } = useOpenMainPage((state) => state);
  const { setOpenMypage, openMypage } = useOpenMypage((state) => state);

  return (
    <>
      {/* 화면 틀 */}
      <div className="w-full">
        <Header />
        {/* 제목 */}
        <div className="mx-10">
          <div className="text-3xl text-gray-500 my-5">
            <Title value={'스프린트 생성'} />
          </div>
          {/* 생성 페이지 */}
          <NewSprintCreatePage />
          {/* 생성 버튼 */}
          <Button />
        </div>
      </div>
    </>
  );
}
