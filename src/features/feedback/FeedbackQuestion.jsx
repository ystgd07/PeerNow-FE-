import { useTogetherPeerEv } from '../../store/PeerStore/store';
import RadioGroup from '../../ui/RadioGroup';
import QuestionRadio from './QuestionRadio';
import ScoreRadio from './ScoreRadio';

export default function FeedbackQuestion() {
  const {
    setSelectedScore1,
    setSelectedScore2,
    setSelectedScore3,
    setSelectedScore4,
    setSelectedScore5,
    setComment1,
    setComment2,
    togetherPeerDto,
  } = useTogetherPeerEv((state) => state);

  return (
    <>
      <div className="m-2 mx-5">
        <RadioGroup>
          <div className="m-2 mb-4">
            <p className="mb-1"> * 동료는 자신이 맡은 일을 잘 수행하였나요?</p>
            <p>
              <ScoreRadio name={'score1'} setEvent={setSelectedScore1} />
            </p>
          </div>
          <div className="m-2 mb-4">
            <p className="mb-1"> * 동료는 기간 및 일정을 잘 지켰나요?</p>
            <p>
              <ScoreRadio name={'score2'} setEvent={setSelectedScore2} />
            </p>
          </div>
          <div className="m-2 mb-4">
            <p className="mb-1"> * 동료의 프로젝트 기여도는 얼마인가요?</p>
            <p>
              <ScoreRadio name={'score3'} setEvent={setSelectedScore3} />
            </p>
          </div>
          <div className="m-2 mb-4">
            <p className="mb-1"> * 동료와 커뮤니케이션이 잘 되었나요?</p>
            <p>
              <ScoreRadio name={'score4'} setEvent={setSelectedScore4} />
            </p>
          </div>
          <div className="m-2 mb-4">
            <p className="mb-1"> * 다음에도 이 동료와 함께 하고싶나요?</p>
            <p>
              <ScoreRadio name={'score5'} setEvent={setSelectedScore5} />
            </p>
          </div>
        </RadioGroup>
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
    </>
  );
}
