// import KanbanBacklog from './KanbanBacklog';
import Progress from './Progress';
import TestDragAndDrop from './TestDragAndDrop';

export default function KanbanBorad() {
  return (
    <>
      <div className="grid grid-cols-3 m-4 ml-8">
        {/* 진행 예정 */}
        <div>
          <Progress value={'진행 예정'} color={'bg-red-500'} />
          {/* <KanbanBacklog /> */}
          <TestDragAndDrop />
        </div>

        {/* 진행 중 */}
        <div>
          <Progress value={'진행 중'} color={'bg-blue-500'} />
          {/* <KanbanBacklog /> */}
          <TestDragAndDrop />
        </div>

        {/* 완료 */}
        <div>
          <Progress value={'완료'} color={'bg-green-500'} />
          {/* <KanbanBacklog /> */}
          <TestDragAndDrop />
        </div>
      </div>
    </>
  );
}
