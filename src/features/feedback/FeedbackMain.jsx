import { useQuery } from 'react-query';
import MainBPBlock from './MainBPBlock';
import MainMyFBBlock from './MainMyFBBlock';
import MainMyScoreBlock from './MainMyScoreBlock';
import MainPeerBlock from './MainPeerBlock';
import { Link } from 'react-router-dom';
import {
  useBackLogPageRes,
  useProjectInBackLog,
} from '../../store/BackLogStore/store';
import axios from 'axios';
import { usePeerEv } from '../../store/PeerStore/store';
import { FaHeartCirclePlus, FaHeartCircleMinus } from 'react-icons/fa6';
import FeedbackOne from './FeedbackOne';
import FeedbackTwo from './FeedbackTwo';
import MyFeedback from './MyFeedback';

export default function FeedbackMain() {
  const { currentProjectNumber } = useBackLogPageRes((state) => state);
  const { setPeerEvDto } = usePeerEv((state) => state);
  const { pjtData } = useProjectInBackLog((state) => state);
  console.log(
    'pjtData[currentProjectNumber].no:',
    pjtData[currentProjectNumber].no,
  );
  const { data: feedBackList, isLoading } = useQuery(
    ['feedBackList', pjtData[currentProjectNumber].no],
    async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_API_DOMAIN}/api/peer?projectNumber=${pjtData[currentProjectNumber].no}`,
        {
          withCredentials: true,
        },
      );
      return res;
    },
    {
      onSuccess: (data) => {
        console.log('projectNumber log : ', data?.data?.data);
        setPeerEvDto(data?.data?.data);
      },
      onError: (error) => {
        console.log('error : ', error);
      },
      refetchOnWindowFocus: false,
    },
  );
  console.log('feedBackList : ', feedBackList);
  console.log('currentPage : ', currentProjectNumber);

  return (
    <>
      <div className="h-[40rem] scroll overflow-y-scroll">
        <div className="flex flex-col m-5 mt-5 gap-4">
          <div className="flex items-center flex-row justify-between gap-3">
            <div className="bg-white rounded-lg p-3 w-3/5 shadow-md border-2 border-stone-100">
              <MainMyScoreBlock />
            </div>
            <div className="w-2/5 h-full">
              <div className="">
                {/* 피드백 덩어리들 */}
                <MyFeedback />
              </div>
              <div className="bg-white rounded-md w-full p-3 h-1/2 mt-2 shadow-md border-2 border-stone-100">
                <MainBPBlock />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-md p-3 h-auto mt-2 shadow-lg mb-16 border-2 border-stone-100">
            <MainPeerBlock />
          </div>
        </div>
      </div>
    </>
  );
}
