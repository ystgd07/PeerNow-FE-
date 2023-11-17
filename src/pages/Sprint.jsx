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
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

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
        toast.success('백로그를 불러왔습니다.');

        console.log('data :', data);
        setPjtData(data?.data?.datalist);
      },
      onError: (data) => {
        toast.error('백로그를 불러오지 못했습니다.');
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
          <div className="flex justify-between mt-4 text-3xl text-gray-500">
            <Title value={'스프린트 생성'} />
            <a
              href="javascript:window.history.back();"
              className="flex items-center p-1 mt-2 mr-6 text-base hover:scale-105"
            >
              <TiArrowBackOutline className="mr-1 cursor-pointer w-7 h-7"></TiArrowBackOutline>
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
