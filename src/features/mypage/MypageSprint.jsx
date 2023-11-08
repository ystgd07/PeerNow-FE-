import Sprints from './Sprints';
import Title from './Title';
import { Link } from 'react-router-dom';

export default function MypageSprint() {
  return (
    <>
      {/* 스프린트 sprint */}
      <div className="grid grid-cols-2">
        <span className="text-3xl text-gray-500 mt-5">
          <Title value={'스프린트'} />
        </span>
        <span className="text-right mt-7">
          <Link to={'/home/sprint'} className="text-right ">
            <button className="text-right mr-1 -mb-6">
              <span
                className={`text-lg bg-gray-300 p-1 px-4 rounded-md hover:bg-gray-400`}
              >
                스프린트 생성
              </span>
            </button>
          </Link>
        </span>
      </div>
      <Sprints />
    </>
  );
}
