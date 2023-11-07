import Header from '../ui/Header';
import { useBackLogPage } from '../store/store';
import BacklogList from '../features/backlog/BacklogList';
import BacklogModal from '../features/backlog/BacklogModal';
import { useProjectInBackLog } from '../store/BackLogStore/store';
import { useQuery } from 'react-query';
import {
  fetchBackLogPjtData,
  fetchBackLogPjtDetailData,
} from '../apis/backLogApis';

export default function BackLog() {
  const { isBackLogModalOpen } = useBackLogPage((state) => state);
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

  // const { data: PjtDetailData, isLoading: pjtDetailDataLoading } = useQuery(
  //   [
  //     'fechingPjtDetailDataInB',
  //     PjtData?.data?.datalist?.no,
  //     PjtData?.data?.datalist?.user_id,
  //   ],
  //   fetchBackLogPjtDetailData,
  //   {
  //     enabled: !!PjtData,

  //     onSuccess: (data) => {
  //       console.log('data2 :', data);
  //       // setPjtData(data.datalist);
  //     },
  //   },
  // );

  return (
    <>
      {/* 화면 틀 */}
      <div className="w-full h-auto">
        <Header />
        <BacklogList />
        {isBackLogModalOpen && <BacklogModal />}
      </div>
    </>
  );
}
