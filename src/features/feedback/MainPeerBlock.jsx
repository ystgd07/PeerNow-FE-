import { useQuery } from 'react-query';
import { SlNote } from 'react-icons/sl';
import axios from 'axios';
import {
  usePeerEv,
  usePeerList,
  useTogetherPeerEv,
} from '../../store/PeerStore/store';
import {
  useBackLogPageRes,
  useProjectInBackLog,
} from '../../store/BackLogStore/store';
import { useNavigate } from 'react-router-dom';
import CreatePjtSkeleton from '../../skeleTon/CreatePjtSkeleton';

export default function MainPeerBlock() {
  const { currentProjectNumber, currentProjectOwner } = useBackLogPageRes(
    (state) => state,
  );
  const { pjtData } = useProjectInBackLog((state) => state);
  const { setPeerList } = usePeerEv((state) => state);
  const navigate = useNavigate();
  const { setSelectedPeerId, setSelectedName, setSelectedImg } =
    useTogetherPeerEv((state) => state);
  const {
    setPeerListPeerId,
    setPeerListPeerName,
    setPeerListPeerImage,
    setPeerDatalistDto,
  } = usePeerList((state) => state);

  // 특정 프로젝트 팀원 리스트
  const { data: useListForPeer1, isLoading: isLoadingUseListForPeer } =
    useQuery(
      [
        'pjtModalData',
        pjtData[currentProjectNumber]?.no,
        pjtData[currentProjectNumber]?.user_id,
      ],
      async () => {
        const res = await axios.get(
          `${process.env.REACT_APP_API_DOMAIN}/api/project/peerlist?projectNumber=${pjtData[currentProjectNumber]?.no}`,
          {
            withCredentials: true,
          },
        );
        return res.data;
      },
      {
        onSuccess: (data) => {
          console.log('undefined log : ', data);
          setPeerList(data?.datalist);
        },
        onError: (error) => {
          console.log('error : ', error);
        },
        refetchOnWindowFocus: false,
      },
    );

  // 동료평가 동료 리스트
  const { data: useListForPeer2, isLoading: isLoadingUseListForPeer2 } =
    useQuery(
      ['PeerListForFeedback', pjtData[currentProjectNumber]?.no],
      async () => {
        const res = await axios.get(
          `${process.env.REACT_APP_API_DOMAIN}/api/peer/peerlist?projectNumber=${pjtData[currentProjectNumber]?.no}`,
          {
            withCredentials: true,
          },
        );
        return res.data;
      },
      {
        onSuccess: (data) => {
          console.log('useListForPeer2 : ', data);
          setPeerDatalistDto(data?.datalist);
        },
        onError: (error) => {
          console.log('error : ', error);
        },
        refetchOnWindowFocus: false,
      },
    );

  console.log('useListForPeer1useListForPeer1 :', useListForPeer1);
  console.log('useListForPeer2', useListForPeer2);

  return (
    <div className="p-1">
      <p className="mt-2 ml-3 mb-5 border-b-2 border-slate-100 text-lg font-semibold text-gray-700">
        함께한 <span className="font-extrabold">동료</span>에 대해{' '}
        <span className="underline">평가</span>해주세요
      </p>
      <div className="h-[20rem] grid grid-cols-6 gap-4 text-center text-base p-4 overflow-y-scroll scrollBar">
        {useListForPeer2 ? (
          useListForPeer2?.datalist.map((item, index) => (
            <div
              key={index}
              className={`cursor-pointer max-w-sm bg-white shadow-xl rounded-lg overflow-hidden h-60 hover:scale-95 relative ${
                item?.score === 0 ? 'cursor-alias' : 'cursor-auto'
              }`}
              onClick={(e) => {
                setPeerListPeerName(item?.peer_name);
                setPeerListPeerId(item?.peer_id);
                setPeerListPeerImage(`data:image/*;base64,${item?.peer_image}`);

                if (item?.score === 0) {
                  navigate('/home/feedback2');
                }
              }}
            >
              <img
                src={`data:image/*;base64,${item?.peer_image}`}
                className="w-full h-48 object-cover object-center"
              />
              <div className="absolute top-0 left-0 w-full h-full font-semibold">
                <span className="flex flex-row justify-start items-center">
                  <span className="rounded-tl-lg font-black p-1 text-[#FFA500]">
                    {item?.peer_role}
                  </span>
                </span>
              </div>
              <div className="p-1">
                <div className="mb-10 flex justify-center items-center gap-2 text-center">
                  {/* <span className="rounded-full font-black p-2 pr-1 text-[#FFA500]">
                    {item?.peer_role}
                  </span> */}
                  <h1 className="text-xl font-bold text-gray-800 -mr-1">
                    {item?.peer_name}
                  </h1>
                  {/* <p className="text-base text-gray-600">
                    ({item?.peer_id.toUpperCase()})
                  </p> */}
                  <span className="flex flex-row justify-end items-center ml-2">
                    <span className="text-xs font-bold">
                      <SlNote />
                    </span>
                    {item?.score === 0 ? (
                      <span className="font-extrabold mx-1">-</span>
                    ) : (
                      <span className="font-bold  mx-1">{item?.score}</span>
                    )}
                    <span className="text-gray-500 text-xs items-center mt-1">
                      /50
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <CreatePjtSkeleton />
        )}
      </div>
    </div>
  );
}
