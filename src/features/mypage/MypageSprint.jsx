import NewCreateSprintBtn from './NewCreateSprintBtn';
import Sprints from './Sprints';

export default function MypageSprint() {
  return (
    <>
      {/* 스프린트 sprint */}
      <sapn className="text-3xl text-gray-500 mt-5">스프린트</sapn>
      <button className="float-right mt-3 text-xl bg-gray-200">
        <NewCreateSprintBtn />
      </button>
      <Sprints />
    </>
  );
}
