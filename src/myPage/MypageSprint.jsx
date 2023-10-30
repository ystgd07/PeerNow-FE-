export default function MypageSprint() {
  return (
    <>
      {/* 스프린트 sprint */}
      <sapn className="text-3xl text-gray-500 mt-5">스프린트</sapn>
      <button className="float-right mt-3 text-xl bg-gray-200">
        스프린트 만들기
      </button>
      <div className="gap-4 mt-3">
        <div className="bg-white rounded-lg p-3 grid grid-cols-2">
          <p className="p-1 px-5 grid grid-cols-2">
            <span className="text-xl">프로젝트 기획</span>
            <span className="text-left">2023-09-17 ~ 2023-09-23</span>
          </p>
          <p className="p-1 px-5 grid grid-cols-2">
            <span className="text-xl">프로젝트 기획</span>
            <span className="text-left">2023-09-17 ~ 2023-9-23</span>
          </p>
          <p className="p-1 px-5 grid grid-cols-2">
            <span className="text-xl">프로젝트 기획</span>
            <span className="text-left">2023-39-17 ~ 2023-19-23</span>
          </p>
          <p className="p-1 px-5 grid grid-cols-2">
            <span className="text-xl">프로젝트 기획</span>
            <span className="text-left">2023-49-17 ~ 2023-09-23</span>
          </p>
          <p className="p-1 px-5 grid grid-cols-2">
            <span className="text-xl">프로젝트 기획</span>
            <span className="text-left">2023-09-17 ~ 2023-09-23</span>
          </p>
          <p className="p-1 px-5 grid grid-cols-2">
            <span className="text-xl">프로젝트 기획</span>
            <span className="text-left">2023-09-17 ~ 2023-19-11</span>
          </p>
          <p className="p-1 px-5 grid grid-cols-2">
            <span className="text-xl">프로젝트 기획</span>
            <span className="text-left">2023-29-37 ~ 2023-01-23</span>
          </p>

          {/* <p className="p-1 px-5">
            <span className="text-xl">화면 구성, 컴포넌트 설계</span>
            <span className="text-right" style={{ float: 'right' }}>
              2023-09-24 ~ 2023-09-30
            </span>
          </p>
          <p className="p-1 px-5">
            <span className="text-xl">UI 작업</span>
            <span className="text-right" style={{ float: 'right' }}>
              2023-10-01 ~ 2023-10-07
            </span>
          </p>
          <p className="p-1 px-5">
            <span className="text-xl">주요 기능 구현</span>
            <span className="text-right" style={{ float: 'right' }}>
              2023-10-08 ~ 2023-10-15
            </span>
          </p>
          <p className="p-1 px-5">
            <span className="text-xl">트러블 슈팅, 이슈 체크</span>
            <span className="text-right" style={{ float: 'right' }}>
              2023-10-08 ~ 2023-10-15
            </span>
          </p> */}
        </div>
      </div>
    </>
  );
}
