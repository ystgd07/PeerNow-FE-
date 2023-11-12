import BacklogIcon from './BacklogIcon';
import MypageBackLogTitle from './MypageBackLogTitle';

export default function MypageBacklog() {
  return (
    <>
      {/* 진행중인 백로그 back log */}
      <div className="bg-white h-72 rounded-lg p-3 overflow-y-scroll  scrollbar-thumb-black scrollbar-thumb-rounded-full scrollbar-thin scrollbar-track-slate-100">
        <div>
          <MypageBackLogTitle />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-5 mx-3">
          <BacklogIcon />
        </div>
      </div>
    </>
  );
}
