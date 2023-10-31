import Header from '../ui/Header';
import { useEffect } from 'react';
import { useOpenMainPage, useOpenMypage } from '../store/store';

export default function Sprint() {
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
      <div className="w-full">
        <Header />
        {/* 제목 */}
        {/* 생성 페이지 */}
      </div>
    </>
  );
}
