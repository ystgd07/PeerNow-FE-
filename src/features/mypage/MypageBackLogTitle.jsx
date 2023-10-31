import BackLogPageBtn from './BackLogPageBtn';

export default function MypageBackLogTitle() {
  return (
    <>
      <span className="text-xl text-gray-500">
        진행중인 백로그
        <span>(3)</span>
      </span>
      <BackLogPageBtn />
    </>
  );
}
