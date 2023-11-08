import { AllBacklogOfThisPjt } from '../../store/BackLogStore/store';
import BackLogPageBtn from './BackLogPageBtn';
import { Link } from 'react-router-dom';

export default function MypageBackLogTitle() {
  // backlogData
  const { backlogData } = AllBacklogOfThisPjt((state) => state);
  // 진행중인 상태의 백로그
  const filteredBacklogs = backlogData.filter((item) => item.status == 'ing');
  // 진행중인 백로그 갯수
  const inProgressBacklogCount = filteredBacklogs.length;

  return (
    <>
      <span className="text-xl text-gray-500">
        진행중인 백로그
        <span>({inProgressBacklogCount})</span>
      </span>
      <Link to={'/home/backlog'}>
        <BackLogPageBtn />
      </Link>
    </>
  );
}
