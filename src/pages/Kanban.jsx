import Header from '../ui/Header';
import { useEffect } from 'react';
import { useOpenMainPage, useOpenMypage } from '../store/store';
import KanbanList from '../features/kanban/KanbanList';
import { useProjectInBackLog } from '../store/BackLogStore/store';
import { fetchBackLogPjtData } from '../apis/backLogApis';
import { useQuery } from 'react-query';

export default function Kanban() {
  // Header용
  const { setPjtDetailData, setPjtData } = useProjectInBackLog(
    (state) => state,
  );
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

  const { setOpenMainPage, openMainPage } = useOpenMainPage((state) => state);
  const { setOpenMypage, openMypage } = useOpenMypage((state) => state);

  useEffect(() => {
    console.log('openMainPage', openMainPage);
    setOpenMainPage(openMainPage);
    setOpenMypage(openMypage);
  }, []);

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
