import Header from '../ui/Header';
import { useEffect } from 'react';
import { useOpenMainPage, useOpenMypage } from '../store/store';
import Title from '../features/mypage/Title';
import NewSprintCreatePage from '../features/sprint/NewSprintCreatePage';
import Button from '../features/sprint/Button';
import { PjtNumNow } from '../store/header/store';

export default function Sprint() {
  const { setOpenMainPage, openMainPage } = useOpenMainPage((state) => state);
  const { setOpenMypage, openMypage } = useOpenMypage((state) => state);
  // 헤더 프로젝트 번호
  const { nowNum } = PjtNumNow((state) => state);

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
        <div className="mx-10">
          <div className="text-3xl text-gray-500 my-5">
            <Title value={'스프린트 생성'} />
          </div>
          {/* 생성 페이지 */}
          <NewSprintCreatePage />
          {/* 생성 버튼 */}
          <Button />
        </div>
      </div>
    </>
  );
}
