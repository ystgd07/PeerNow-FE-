import Header from '../ui/Header';
import MypageSprint from './MypageSprint';
import MypageChart from './MypageChart';
import MypageBacklog from './MypageBacklog';

export default function MyPage() {
  return (
    <>
      {/* 화면 틀 */}
      <div className="w-full">
        <Header />
        <div className="mx-10 grid grid-cols-2 gap-4 mt-3">
          {/* 스프린트 sprint */}
          <div className="col-span-2">
            <MypageSprint />
          </div>
          {/* 번다운 차트 burndown-chart */}
          <MypageChart />
          {/* 진행중인 백로그 back log */}
          <div className="bg-white rounded-lg p-3">
            <MypageBacklog />
          </div>
        </div>
      </div>
    </>
  );
}
