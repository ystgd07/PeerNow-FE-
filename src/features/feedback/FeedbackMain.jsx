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
        `/api/peer?projectNumber=${pjtData[currentProjectNumber].no}`,
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
      <div className="flex flex-col m-5 mt-5 gap-4 h-full">
        <div className="flex items-center flex-row justify-between gap-3">
          <div className="bg-white rounded-lg p-3 w-3/5 shadow-md border-2 border-stone-100">
            <MainMyScoreBlock />
          </div>
          <div className="w-2/5 h-full">
            <div className="flex flex-row mb-4 mt-1">
              <div className="cursor-pointer bg-[white] rounded-md shadow-md text-center p-3 w-full h-1/2 mr-3 border-2 border-stone-100 hover:bg-[#F0FFF0]">
                {/* <Link to="/home/feedback3">
                <MainMyFBBlock />
                 </Link> */}
                <div className="flex justify-center items-center m-3 cursor-pointer hover:scale-110">
                  <p className="font-bold text-lg text-gray-700 ">
                    지지적 피드백
                  </p>
                  <FaHeartCirclePlus className="ml-3 text-[#80E12A]" />
                </div>
              </div>
              <div className="cursor-pointer bg-white rounded-md shadow-md text-center p-3 w-full h-1/2 border-2 border-stone-100 hover:bg-[#FFF0F5]">
                {/* <Link to="/home/feedback3">
                <MainMyFBBlock />
                 </Link> */}
                <div className="flex justify-center items-center m-3 cursor-pointer hover:scale-110">
                  <p className="font-bold bold text-lg text-gray-700 ">
                    교정적 피드백
                  </p>
                  <FaHeartCircleMinus className="ml-3 text-[#FF5675] " />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-md w-full p-3 h-1/2 mt-2 shadow-md border-2 border-stone-100">
              {/* 페이지 */}
              <MainBPBlock />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-md p-3 h-full mt-2 shadow-lg mb-16 border-2 border-stone-100">
          <MainPeerBlock />
        </div>
        <div className="p-3"></div>
      </div>
    </>
  );
}
