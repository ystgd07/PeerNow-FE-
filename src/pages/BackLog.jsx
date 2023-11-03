import Header from '../ui/Header';
import { useBackLogPage } from '../store/store';
import BacklogList from '../features/backlog/BacklogList';
import TestModal from '../features/backlog/TestModal';
import TestModal2 from '../features/backlog/TestModal2';
import TestModal3 from '../features/backlog/TestModal3';

export default function BackLog() {
  const { isBackLogModalOpen } = useBackLogPage((state) => state);

  return (
    <>
      {/* 화면 틀 */}
      <div className="w-full h-auto">
        <Header />
        <BacklogList />
        {isBackLogModalOpen && <TestModal2 />}
      </div>
    </>
  );
}
