export default function Sprints() {
  return (
    <>
      <div className="gap-4 mt-3">
        <div className="bg-white rounded-lg p-3 grid grid-cols-2 gap-3">
          <div className="p-1 px-5">
            <div className="text-xl">프로젝트 기획</div>
            <div className="text-left text-xs">2023-09-17 ~ 2023-09-23</div>
          </div>
          <div className="p-1 px-5">
            <div className="text-xl">화면 구성, 컴포넌트 설계</div>
            <div className="text-left text-xs">2023-09-24 ~ 2023-09-30</div>
          </div>
          <div className="p-1 px-5">
            <div className="text-xl">UI 작업</div>
            <div className="text-left text-xs">2023-10-01 ~ 2023-10-07</div>
          </div>
          <div className="p-1 px-5">
            <div className="text-xl">주요 기능 구현</div>
            <div className="text-left text-xs">2023-10-08 ~ 2023-10-15</div>
          </div>
          <div className="p-1 px-5">
            <div className="text-xl">트러블 슈팅, 이슈 체크</div>
            <div className="text-left text-xs">2023-10-08 ~ 2023-10-15</div>
          </div>
        </div>
      </div>
    </>
  );
}
