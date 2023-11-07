import { fetchBackLogPjtData } from '../apis/backLogApis';
import FeedbackMain from '../features/feedback/FeedbackMain';
import { useProjectInBackLog } from '../store/BackLogStore/store';
import Header from '../ui/Header';
import { useQuery } from 'react-query';

export default function Feedback() {
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

  return (
    <>
      {/* 화면 틀 */}
      <div className="w-full h-auto">
        <Header />
        <FeedbackMain />
      </div>
    </>
  );
}
