import Header from '../ui/Header';
import Title from '../features/mypage/Title';
import NewSprintCreatePage from '../features/sprint/NewSprintCreatePage';
import Button from '../features/sprint/Button';
import { PjtNumNow } from '../store/header/store';
import { useQuery } from 'react-query';
import {
  AllBacklogOfThisPjt,
  useBackLogPageRes,
  useProjectInBackLog,
} from '../store/BackLogStore/store';
import { fetchBackLogList, fetchBackLogPjtData } from '../apis/backLogApis';
import { TiArrowBackOutline } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';

export default function Sprint() {
  //
  const navigate = useNavigate();

  // Header용
  const { setPjtDetailData, setPjtData } = useProjectInBackLog(
    (state) => state,
  );

  //
  const { nowNum } = PjtNumNow((state) => state);
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

  // 전체 백로그 불러오기
  const { backlogData, setBacklogData } = AllBacklogOfThisPjt((state) => state);
  const { data: bData, isLoading: bDataLoading } = useQuery(
    ['fetchBackLogList', nowNum],
    () => fetchBackLogList(nowNum),
    {
      enabled: !!PjtData,
      onSuccess: (data) => {
        console.log('data :', data);
        setBacklogData(data?.data?.datalist);
      },
    },
  );

  return (
    <>
      {/* 화면 틀 */}
      <div className="w-full">
        <Header />
        {/* 제목 */}
        <div className="mx-10">
          <div className="text-3xl text-gray-500 mt-4 flex justify-between">
            <Title value={'스프린트 생성'} />
            <a
              href="javascript:window.history.back();"
              className="p-1 mt-2 text-base hover:scale-105 flex items-center mr-6"
            >
              <TiArrowBackOutline className="cursor-pointer w-7 h-7 mr-1"></TiArrowBackOutline>
              뒤로가기
            </a>
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
