import Header from '../ui/Header';
import MypageSprint from './MypageSprint';
import MypageChart from './MypageChart';
import MypageBacklog from './MypageBacklog';
import { useEffect } from 'react';
import { useOpenMainPage, useOpenMypage } from '../store/store';

export default function MyPage() {
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
          <div className="p-3 bg-white rounded-lg">
            <MypageBacklog />
          </div>
        </div>
      </div>
    </>
  );
}
