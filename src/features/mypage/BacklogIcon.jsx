export default function BacklogIcon() {
  return (
    <>
      <div className="border border-gray-300 rounded-md text-center py-2">
        <div className="flex justify-center">
          <span className="">
            <img
              src="testImg.jpg"
              alt="백로그_담당자_이미지"
              className="rounded-full w-6 h-6"
            />
          </span>
          <span className="ml-1">화면 설계서 만들기</span>
        </div>
      </div>
      {/* 반복문 */}
      <div className="border border-gray-300 rounded-md text-center py-2">
        <div className="flex justify-center">
          <span className="">
            <img
              src="testImg.jpg"
              alt="백로그_담당자_이미지"
              className="rounded-full w-6 h-6"
            />
          </span>
          <span className="ml-1">AWS 아키텍처 설계</span>
        </div>
      </div>
      <div className="border border-gray-300 rounded-md text-center py-2">
        <div className="flex justify-center">
          <span className="">
            <img
              src="testImg.jpg"
              alt="백로그_담당자_이미지"
              className="rounded-full w-6 h-6"
            />
          </span>
          <span className="ml-1">FE - 로그인페이지</span>
        </div>
      </div>
    </>
  );
}
