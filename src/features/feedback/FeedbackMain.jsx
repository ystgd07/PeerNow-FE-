import { useQuery } from 'react-query';
import MainBPBlock from './MainBPBlock';
import MainMyFBBlock from './MainMyFBBlock';
import MainMyScoreBlock from './MainMyScoreBlock';
import MainPeerBlock from './MainPeerBlock';
import { Link } from 'react-router-dom';
import { useBackLogPageRes } from '../../store/BackLogStore/store';
import axios from 'axios';
import { usePeerEv } from '../../store/PeerStore/store';

export default function FeedbackMain() {
  const { currentProjectNumber } = useBackLogPageRes((state) => state);
  const { setPeerEvDto } = usePeerEv((state) => state);

  const { data: feedBackList, isLoading } = useQuery(
    ['feedBackList', currentProjectNumber],
    async () => {
      const res = await axios.get(
        `http://www.peernow.site/api/peer?projectNumber=${currentProjectNumber}`,
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
      <div className="grid grid-cols-2 grid-rows-3 m-1 mt-2 gap-2 text-lg">
        <div className="bg-white rounded-md row-span-3 p-3 grid grid-rows-3">
          <MainMyScoreBlock />
        </div>
        <div className="bg-white rounded-md row-span-2 p-3">
          <MainBPBlock />
        </div>
        <div className="bg-white rounded-md text-center p-3">
          <Link to="/home/feedback3">
            {/* 페이지 */}
            <MainMyFBBlock />
          </Link>
        </div>
        <div className="bg-white rounded-md col-span-full p-3">
          <MainPeerBlock />
        </div>
      </div>
    </>
  );
}
