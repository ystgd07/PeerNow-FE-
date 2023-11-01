import KanbanBorad from './KanbanBorad';
import KanbanHeader from './KanbanHeader';
// import TestKanbanBoard from './TestKanbanBorad';

export default function KanbanList() {
  return (
    <>
      <div className="bg-white rounded-lg m-6">
        {/* 스프린트 해더 */}
        <KanbanHeader />
        {/* 칸반보드 */}
        <div className="pb-5">
          <KanbanBorad />
          {/* <TestKanbanBoard /> */}
        </div>
      </div>
    </>
  );
}
