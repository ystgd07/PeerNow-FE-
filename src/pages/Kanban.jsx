import Header from '../ui/Header';
import KanbanList from '../features/kanban/KanbanList';
import {
  useBackLogPageRes,
  useProjectInBackLog,
} from '../store/BackLogStore/store';
import { fetchBackLogPjtData } from '../apis/backLogApis';
import { useQuery } from 'react-query';
import { useKanbanData } from '../store/KanbanStore/sotre';
import { PjtNumNow } from '../store/header/store';

export default function Kanban() {
  // Header용
  const { setPjtDetailData, setPjtData } = useProjectInBackLog(
    (state) => state,
  );

  //
  const { nowNum } = PjtNumNow((state) => state);
  const { currentProjectNumber } = useBackLogPageRes((state) => state);
  const { data: PjtData, isLoading: pjtDataLoading } = useQuery(
    ['fechingPjtDataInB'],
    fetchBackLogPjtData,
    {
      onSuccess: (data) => {
        console.log('data :', data);
        setPjtData(data.data.datalist);
      },
    },
  );

  return (
    <>
      {/* 화면 틀 */}
      <div className="w-full h-auto">
        <Header />
        <KanbanList />
      </div>
    </>
  );
}
