import ChartGeneral from './ChartGeneral';
import Title from './Title';
import { GiEntryDoor } from 'react-icons/gi';
import { Link } from 'react-router-dom';
// import ChartPlus from './ChartPlus';

export default function MypageChart() {
  return (
    <>
      {/* 번다운 차트 burndown-chart */}
      {/* <div className="bg-white rounded-lg p-3">유료 번다운 차트 화면</div> */}
      <div className="bg-white rounded-lg p-3 h-72">
        <div className="flex items-center justify-between">
          <span className="text-xl text-gray-500">
            <Title value={'번다운 차트'} />
          </span>
          <Link to={'/home/burndown'}>
            {/* <GiEntryDoor className="text-xl cursor-pointer hover:scale-125 text-slate-600"></GiEntryDoor> */}
            <a className="float-right px-4 text-xl font-bold text-gray-500">
              &rarr;
            </a>
          </Link>
        </div>
        <div className="h-52">
          <ChartGeneral />
          {/* <ChartPlus /> */}
        </div>
      </div>
    </>
  );
}
