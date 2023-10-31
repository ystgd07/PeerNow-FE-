import ChartGeneral from './ChartGeneral';
import Title from './Title';
// import ChartPlus from './ChartPlus';

export default function MypageChart() {
  return (
    <>
      {/* 번다운 차트 burndown-chart */}
      {/* <div className="bg-white rounded-lg p-3">유료 번다운 차트 화면</div> */}
      <div className="bg-white rounded-lg p-3 ">
        <span className="text-xl text-gray-500">
          <Title value={'번다운 차트'} />
        </span>
        <div>
          <ChartGeneral />
          {/* <ChartPlus /> */}
        </div>
      </div>
    </>
  );
}
