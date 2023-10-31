import Header from '../ui/Header';
import { useEffect } from 'react';
import { useOpenMainPage, useOpenMypage } from '../store/store';
import KanbanList from '../features/kanban/KanbanList';

export default function Kanban() {
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
