import Header from '../ui/Header';
import { useEffect } from 'react';
import { useBackLogPage, useOpenMainPage, useOpenMypage } from '../store/store';
import BacklogList from '../features/backlog/BacklogList';

export default function BackLog() {
  const { isBackLogModalOpen } = useBackLogPage((state) => state);

  return (
    <>
      {/* 화면 틀 */}
      <div className="w-full h-auto">
        <Header />
        <BacklogList />
        {isBackLogModalOpen && <div>임시 모달</div>}
      </div>
    </>
  );
}
