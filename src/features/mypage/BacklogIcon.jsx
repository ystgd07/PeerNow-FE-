export default function BacklogIcon() {
  return (
    <>
      <p className="py-2 text-center border border-gray-300 rounded-md">
        <div className="flex justify-center">
          <span className="">
            <img
              src="testImg.jpg"
              alt="백로그_담당자_이미지"
              className="w-6 h-6 rounded-full"
            />
          </span>
          <span className="ml-1">화면 설계서 만들기</span>
        </div>
      </p>
      {/* 반복문 */}
      <p className="py-2 text-center border border-gray-300 rounded-md">
        <div className="flex justify-center">
          <span className="">
            <img
              src="testImg.jpg"
              alt="백로그_담당자_이미지"
              className="w-6 h-6 rounded-full"
            />
          </span>
          <span className="ml-1">AWS 아키텍처 설계</span>
        </div>
      </p>
      <p className="py-2 text-center border border-gray-300 rounded-md">
        <div className="flex justify-center">
          <span className="">
            <img
              src="testImg.jpg"
              alt="백로그_담당자_이미지"
              className="w-6 h-6 rounded-full"
            />
          </span>
          <span className="ml-1">FE - 로그인페이지</span>
        </div>
      </p>
    </>
  );
}
