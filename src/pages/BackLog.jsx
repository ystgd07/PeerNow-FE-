import Header from '../ui/Header';
import { useBackLogPage } from '../store/store';
import BacklogList from '../features/backlog/BacklogList';
import BacklogModal from '../features/backlog/BacklogModal';
import {
  useBackLogPageRes,
  useProjectInBackLog,
} from '../store/BackLogStore/store';
import { useQuery } from 'react-query';
import { fetchBackLogPjtData } from '../apis/backLogApis';
import axios from 'axios';

export default function BackLog() {
  const { isBackLogModalOpen } = useBackLogPage((state) => state);
  const { setPjtDetailData, setPjtData, pjtData } = useProjectInBackLog(
    (state) => state,
  );
  const { currentProjectNumber, currentProjectData } = useBackLogPageRes(
    (state) => state,
  );

  //  user_id
  const { data: PjtData, isLoading: pjtDataLoading } = useQuery(
    ['fechingPjtDataInB'],
    fetchBackLogPjtData,
    {
      onSuccess: (data) => {
        console.log('data PjtData :', data);
        setPjtData(data.data.datalist);
      },
    },
  );

  const { data: PjtDetailData, isLoading: pjtDetailDataLoading } = useQuery(
    [
      'fechingPjtDetailDataInB',
      pjtData[currentProjectNumber].no,
      pjtData[currentProjectNumber].user_id,
    ],
    async () => {
      const res = await axios.get(
        `http://www.peernow.site/api/project/peerlist?projectNumber=${pjtData[currentProjectNumber].no}`,
        {
          withCredentials: true,
        },
      );

      return res;
    },
    {
      enabled: !!PjtData,

      onSuccess: (data) => {
        console.log('data2 :', data);
        setPjtDetailData(data?.data?.datalist);
      },
    },
  );

  return (
    <>
      {/* 화면 틀 */}
      <div className="w-full h-auto">
        <Header />
        {/* 2 currentPjtNum이 변경되면 BackLogList를 재랜더링 */}
        <BacklogList />
        {isBackLogModalOpen && <BacklogModal />}
      </div>
    </>
  );
}
