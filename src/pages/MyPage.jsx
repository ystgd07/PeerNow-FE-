import Header from '../ui/Header';
import MypageSprint from '../features/mypage/MypageSprint';
import MypageChart from '../features/mypage/MypageChart';
import MypageBacklog from '../features/mypage/MypageBacklog';
import { useEffect } from 'react';
import { useOpenMainPage, useOpenMypage } from '../store/store';
import { PjtNumNow } from '../store/header/store';
import { useQuery } from 'react-query';
import { fetchBackLogList, fetchBackLogPjtData } from '../apis/backLogApis';
import {
  AllBacklogOfThisPjt,
  useProjectInBackLog,
} from '../store/BackLogStore/store';

export default function MyPage() {
  // Header용
  const { setPjtDetailData, setPjtData } = useProjectInBackLog(
    (state) => state,
  );

  // 현재 프로젝트 번호
  const { nowNum } = PjtNumNow((state) => state);

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

  // 전체 백로그 불러오기
  const { backlogData, setBacklogData } = AllBacklogOfThisPjt((state) => state);
  const { data: bData, isLoading: bDataLoading } = useQuery(
    ['fetchBackLogList', nowNum],
    () => fetchBackLogList(nowNum),
    {
      enabled: !!PjtData,
      onSuccess: (data) => {
        console.log('data :', data);
        setBacklogData(data?.data?.datalist);
      },
    },
  );

  // Modal용
  const { setOpenMainPage, openMainPage } = useOpenMainPage((state) => state);
  const { setOpenMypage, openMypage } = useOpenMypage((state) => state);

  useEffect(() => {
    console.log('openMainPage', openMainPage);
    setOpenMainPage(openMainPage);
    setOpenMypage(openMypage);
  }, []);

  return (
    <>
      {/* 화면 틀 */}
      <div className="w-full">
        <Header />
        <div className="grid grid-cols-2 gap-4 mx-10 mt-3">
          {/* 스프린트 sprint */}
          <div className="col-span-2">
            <MypageSprint />
          </div>
          {/* 번다운 차트 burndown-chart */}
          <MypageChart />
          {/* 진행중인 백로그 back log */}
          <MypageBacklog />
        </div>
      </div>
    </>
  );
}
