import BackLogPageBtn from './BackLogPageBtn';
import BacklogIcon from './BacklogIcon';
import MypageBackLogTitle from './MypageBackLogTitle';
import Title from './Title';

export default function MypageBacklog() {
  return (
    <>
      {/* 진행중인 백로그 back log */}
      <div className="bg-white rounded-lg p-3">
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
