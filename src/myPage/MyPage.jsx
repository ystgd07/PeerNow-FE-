import Header from '../ui/Header';

export default function MyPage() {
  return (
    <>
      {/* 화면 틀 */}
      <div className="mx-10 w-full">
        <Header />
        <div className="text-3xl text-gray-500 mt-5">스프린트</div>
        {/* 스프린트 */}
        <div className="grid grid-cols-2 gap-4 mt-3">
          <div className="bg-white rounded-lg p-3 col-span-2">
            <p className="p-1 px-5">
              <span className="text-2xl">프로젝트 기획</span>
              <span className="text-right" style={{ float: 'right' }}>
                2023-09-17 ~ 2023-09-23
              </span>
            </p>
            <p className="p-1 px-5">
              <span className="text-2xl">화면 구성, 컴포넌트 설계</span>
              <span className="text-right" style={{ float: 'right' }}>
                2023-09-24 ~ 2023-09-30
              </span>
            </p>
            <p className="p-1 px-5">
              <span className="text-2xl">UI 작업</span>
              <span className="text-right" style={{ float: 'right' }}>
                2023-10-01 ~ 2023-10-07
              </span>
            </p>
            <p className="p-1 px-5">
              <span className="text-2xl">주요 기능 구현</span>
              <span className="text-right" style={{ float: 'right' }}>
                2023-10-08 ~ 2023-10-15
              </span>
            </p>
            <p className="p-1 px-5">
              <span className="text-2xl">트러블 슈팅, 이슈 체크</span>
              <span className="text-right" style={{ float: 'right' }}>
                2023-10-08 ~ 2023-10-15
              </span>
            </p>
          </div>
          {/* 번다운 차트 */}
          {/* <div className="bg-white rounded-lg p-3">유료 번다운 차트 화면</div> */}
          <div className="bg-white rounded-lg p-3 ">
            <p className="text-xl text-gray-500">번다운 차트</p>
            <p>d</p>
          </div>
          {/* 진행중인 백로그 */}
          <div className="bg-white rounded-lg p-3">
            <p className="text-xl text-gray-500">진행중인 백로그</p>
          </div>
        </div>
      </div>
    </>
  );
}
