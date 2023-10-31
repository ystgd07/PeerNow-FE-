import Sprints from './Sprints';
import NewCreateSprintBtn from './NewCreateSprintBtn';
import Title from './Title';

export default function MypageSprint() {
  return (
    <>
      {/* 스프린트 sprint */}
      <div className="grid grid-cols-2">
        <span className="text-3xl text-gray-500 mt-5">
          <Title value={'스프린트'} />
        </span>
        <NewCreateSprintBtn />
      </div>
      <Sprints />
    </>
  );
}
