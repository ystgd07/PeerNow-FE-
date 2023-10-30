export default function MypageBacklog() {
  return (
    <>
      {/* 진행중인 백로그 back log */}
      <div className="bg-white rounded-lg p-3">
        <span className="text-xl text-gray-500">진행중인 백로그 (8)</span>
        <a
          href="#"
          className="text-xl font-bold text-gray-500 float-right px-4"
        >
          &#43;
        </a>
        <div className="grid grid-cols-2 gap-4 mt-5 mx-3">
          <p className="border border-gray-300 rounded-md text-center py-2">
            야호
          </p>
          <p className="border border-gray-300 rounded-md text-center py-2">
            야호
          </p>
          <p className="border border-gray-300 rounded-md text-center py-2">
            야호
          </p>
          <p className="border border-gray-300 rounded-md text-center py-2">
            야호
          </p>
          <p className="border border-gray-300 rounded-md text-center py-2">
            야호
          </p>
          <p className="border border-gray-300 rounded-md text-center py-2">
            야호
          </p>
        </div>
      </div>
    </>
  );
}
