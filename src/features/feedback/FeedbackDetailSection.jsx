import { postEvData } from '../../apis/apiPeer';
import {
  useBackLogPageRes,
  useProjectInBackLog,
} from '../../store/BackLogStore/store';
import { useTogetherPeerEv } from '../../store/PeerStore/store';
import FeedbackQuestion from './FeedbackQuestion';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

export default function FeedbackDetailSection() {
  const { togetherPeerDto, selectPeerId, setComment1, setComment2 } =
    useTogetherPeerEv((state) => state);
  const { currentProjectNumber } = useBackLogPageRes((state) => state);
  const { pjtData } = useProjectInBackLog((state) => state);
  const navigate = useNavigate();

  const { mutate: postPeerEvData, isLoading } = useMutation(
    ({ currentProjectNumber, selectPeerId }) =>
      postEvData(pjtData[currentProjectNumber].no, selectPeerId),
    {
      onSuccess: (user) => {
        console.log('postPeerEvData : ', user);
        // queryClient.invalidateQueries();
        setComment1('');
        setComment2('');
        navigate('/home/feedback');
      },
      onError: (error) => {
        console.log('Error', error);
      },
    },
  );

  return (
    <>
      <div className="p-2">
        <FeedbackQuestion />
      </div>
      <div className="float-right my-5">
        <button
          className="text-right mr-1 -mb-6"
          onClick={() => {
            postPeerEvData({ currentProjectNumber, selectPeerId });
          }}
        >
          <span
            className={`text-lg bg-gray-300 p-1 px-4 rounded-md hover:bg-gray-400 `}
          >
            제출
          </span>
        </button>
      </div>
    </>
  );
}
