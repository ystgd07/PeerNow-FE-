import { AiFillLock } from 'react-icons/ai';

export default function MypageChart() {
  return (
    <>
      {/* 번다운 차트 burndown-chart */}
      {/* <div className="bg-white rounded-lg p-3">유료 번다운 차트 화면</div> */}
      <div className="bg-white rounded-lg p-3 ">
        <p className="text-xl text-gray-500">번다운 차트</p>
        <p className="text-7xl text-gray-300 flex justify-center mt-11">
          <AiFillLock />
        </p>
        <p className="text-gray-300 flex justify-center mt-4 mb-14">
          프리미엄 회원이 되어 번다운 차트를 확인하세요!
        </p>
      </div>
    </>
  );
}
