import { useNavigate } from 'react-router-dom';
import { useTogetherPeerEv } from '../../store/PeerStore/store';
import RadioGroup from '../../ui/RadioGroup';

import ScoreRadio from './ScoreRadio';
import {
  useBackLogPageRes,
  useProjectInBackLog,
} from '../../store/BackLogStore/store';
import { useMutation } from 'react-query';
import { postEvData } from '../../apis/apiPeer';
import ScoreRadio2 from './ScoreRadio2';

export default function FeedbackQuestion() {
  const {
    selectPeerId,
    setSelectedScore1,
    score1,
    setSelectedScore2,
    score2,
    setSelectedScore3,
    setSelectedScore4,
    setSelectedScore5,
    setComment1,
    comment1,
    setComment2,
    togetherPeerDto,
  } = useTogetherPeerEv((state) => state);
  console.log(
    'FeedbackQuestion: score1, score2, comment1 :',
    score1,
    score2,
    comment1,
  );

  //
  const { currentProjectNumber } = useBackLogPageRes((state) => state);
  const { pjtData } = useProjectInBackLog((state) => state);
  const navigate = useNavigate();

  const { mutate: postPeerEvData, isLoading: isLodingPostPeerEvData } =
    useMutation(
      ({ currentProjectNumber, selectPeerId, togetherPeerDto }) =>
        postEvData(
          // togetherPeerDto,
          pjtData[currentProjectNumber].no,
          selectPeerId,
          togetherPeerDto,
        ),
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
      <div className="m-2 mx-5">
        <div className="m-2 mb-4">
          <p className="mb-1"> * 동료는 자신이 맡은 일을 잘 수행하였나요?</p>
          <p>
            <ScoreRadio
              name={'score1'}
              value={togetherPeerDto.score1}
              onChange={(e) => setSelectedScore1(e.target.value)}
            />
            {/* <ScoreRadio2
              name={'score1'}
              value={togetherPeerDto.score1}
              onChange={(e) => setSelectedScore1(e.target.value)}
            /> */}
          </p>
        </div>
        <div className="m-2 mb-4">
          <p className="mb-1"> * 동료는 기간 및 일정을 잘 지켰나요?</p>
          <p>
            <ScoreRadio
              name={'score2'}
              value={togetherPeerDto.score2}
              onChange={(e) => {
                setSelectedScore2(e.target.value);
              }}
            />
            {/* <ScoreRadio2
              name={'score2'}
              value={togetherPeerDto.score1}
              onChange={(e) => setSelectedScore1(e.target.value)}
            /> */}
          </p>
        </div>
        <div className="m-2 mb-4">
          <p className="mb-1"> * 동료의 프로젝트 기여도는 얼마인가요?</p>
          <p>
            <ScoreRadio
              name={'score3'}
              value={togetherPeerDto.score3}
              onChange={(e) => setSelectedScore3(e.target.value)}
            />
            {/* <ScoreRadio2
              name={'score3'}
              value={togetherPeerDto.score1}
              onChange={(e) => setSelectedScore1(e.target.value)}
            /> */}
          </p>
        </div>
        <div className="m-2 mb-4">
          <p className="mb-1"> * 동료와 커뮤니케이션이 잘 되었나요?</p>
          <p>
            <ScoreRadio
              name={'score4'}
              value={togetherPeerDto.score4}
              onChange={(e) => setSelectedScore4(e.target.value)}
            />
            {/* <ScoreRadio2
              name={'score4'}
              value={togetherPeerDto.score1}
              onChange={(e) => setSelectedScore1(e.target.value)}
            /> */}
          </p>
        </div>
        <div className="m-2 mb-4">
          <p className="mb-1"> * 다음에도 이 동료와 함께 하고싶나요?</p>
          <p>
            <ScoreRadio
              name={'score5'}
              value={togetherPeerDto.score5}
              onChange={(e) => setSelectedScore5(e.target.value)}
            />
            {/* <ScoreRadio2
              name={'score5'}
              value={togetherPeerDto.score1}
              onChange={(e) => setSelectedScore1(e.target.value)}
            /> */}
          </p>
        </div>
      </div>
      <div className="m-2 mx-5">
        <input
          type="text"
          placeholder=" * 프로젝트를 진행하며 동료의 잘한 점을 칭찬해주세요!"
          className="border-gray-200 border-2 rounded-md w-full m-1 py-4 mb-4"
          value={togetherPeerDto.comment1}
          onChange={(e) => {
            setComment1(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder=" * 동료가 더 보안했으면 하는 점이 있다면 알려주세요!"
          className="border-gray-200 border-2  rounded-md w-full m-1 py-4"
          value={togetherPeerDto.comment2}
          onChange={(e) => {
            setComment2(e.target.value);
          }}
        />
      </div>
      <div className="float-right my-5 mb-10">
        <button
          className="text-right mr-1 -mb-6"
          onClick={() => {
            postPeerEvData({ currentProjectNumber, selectPeerId });
          }}
        >
          <span
            className={`text-lg bg-gray-300 p-1 px-4 rounded-md hover:bg-gray-400 mb-10`}
          >
            {isLodingPostPeerEvData ? '제출 중 ..' : '제출'}
          </span>
        </button>
      </div>
    </>
  );
}
