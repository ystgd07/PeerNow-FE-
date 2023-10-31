import ChartGeneral from './ChartGeneral';
// import ChartPlus from './ChartPlus';

export default function MypageChart() {
  return (
    <>
      {/* 번다운 차트 burndown-chart */}
      {/* <div className="bg-white rounded-lg p-3">유료 번다운 차트 화면</div> */}
      <div className="bg-white rounded-lg p-3 ">
        <p className="text-xl text-gray-500">번다운 차트</p>
        <div>
          <ChartGeneral />
          {/* <ChartPlus /> */}
        </div>
      </div>
    </>
  );
}
