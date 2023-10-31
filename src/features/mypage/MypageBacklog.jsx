import BacklogIcon from './BacklogIcon';

export default function MypageBacklog() {
  return (
    <>
      {/* 진행중인 백로그 back log */}
      <div className="bg-white rounded-lg p-3">
        <span className="text-xl text-gray-500">진행중인 백로그 (3)</span>
        <a
          href="#"
          className="text-xl font-bold text-gray-500 float-right px-4"
        >
          &#128073;
        </a>
        <div className="grid grid-cols-2 gap-4 mt-5 mx-3">
          <BacklogIcon />
        </div>
      </div>
    </>
  );
}
