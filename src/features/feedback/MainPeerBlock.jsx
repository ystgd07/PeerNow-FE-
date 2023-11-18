import { useQuery } from 'react-query';
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
import MyFeedbackSelectPage from './MyFeedbackSelectPage';

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
    peerDatalistDto,
  } = usePeerList((state) => state);

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

  console.log('useListForPeer2', useListForPeer2);

  return (
    <div className="p-1">
      <p className="mt-2 mb-5 ml-3 text-lg font-semibold text-gray-700 border-b-2 border-slate-100">
        함께한 <span className="font-extrabold">동료</span>에 대해 {''}
        <span className="underline">평가</span>해주세요
      </p>
      <div className="h-[20rem] grid grid-cols-5 gap-4 text-center text-base p-4 overflow-y-scroll scrollBar">
        {useListForPeer2 ? (
          useListForPeer2?.datalist.map((item, index) => (
            <div
              key={index}
              className={`cursor-pointer max-w-sm bg-white border border-gray-200 rounded-lg overflow-hidden h-72 ${
                item?.score === 0
                  ? 'cursor-pointer hover:scale-95 '
                  : 'cursor-context-menu'
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
              <div className="m-3">
                <div>
                  {item?.peer_role === 'PM' ? (
                    <span className="inline-block whitespace-nowrap rounded-[0.27rem] bg-primary-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700">
                      {item?.peer_role}
                    </span>
                  ) : item?.peer_role === 'SM' ? (
                    <span className="inline-block whitespace-nowrap rounded-[0.27rem] bg-success-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-success-700">
                      {item?.peer_role}
                    </span>
                  ) : (
                    <span className="inline-block whitespace-nowrap rounded-[0.27rem] bg-warning-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-warning-800">
                      {item?.peer_role}
                    </span>
                  )}
                </div>
                <h1 className="-mr-1 text-2xl font-bold text-gray-800 mb-3">
                  {item?.peer_name}
                  <span className="text-gray-500 text-sm"> 님</span>
                </h1>
                <div className="flex justify-center">
                  <img
                    src={`data:image/*;base64,${item?.peer_image}`}
                    className="object-cover object-center w-[6rem] h-[6rem] rounded-full "
                  />
                </div>
                <div className="p-1">
                  <div className="items-center gap-2 mb-10 text-center">
                    <div>
                      <div className="text-gray-400/90 font-semibold text-base">
                        @ {item?.peer_id}
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center mt-7 text-center">
                      {/* 데이터 처음 만들어질 때, 없음, 0으로 기본 */}
                      {item?.score === 0 ? (
                        <span className="font-bold bg-[#f7cc10] p-1.5 px-10 text-lg rounded-lg text-whitehover:bg-[#ffd30f] text-white">
                          평가하기
                        </span>
                      ) : (
                        <span className="bg-[#f7cc10] px-10 p-[0.25rem] rounded-lg text-white">
                          <span className="font-extrabold text-2xl">
                            {item?.score}
                          </span>
                          <span className="items-center font-bold mt-1 ml-1 text-gray-100">
                            /50
                          </span>
                        </span>
                      )}
                    </div>
                  </div>
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
