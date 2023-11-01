import Sprints from './Sprints';
import Title from './Title';
import CreateButton from '../../ui/CreateButton';

export default function MypageSprint() {
  return (
    <>
      {/* 스프린트 sprint */}
      <div className="grid grid-cols-2">
        <span className="text-3xl text-gray-500 mt-5">
          <Title value={'스프린트'} />
        </span>
        <CreateButton value={'스프린트 생성'} />
      </div>
      <Sprints />
    </>
  );
}
