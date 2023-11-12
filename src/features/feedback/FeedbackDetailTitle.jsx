import { TiArrowBackOutline } from 'react-icons/ti';
import { useTogetherPeerEv } from '../../store/PeerStore/store';

export default function FeedbackDetailTitle() {
  const { setComment1, setComment2 } = useTogetherPeerEv((state) => state);

  return (
    <>
      <div>
        <p className="text-3xl font-semibold text-slate-700">동료평가</p>
        <p className="m-1 text-slate-500">
          동료평가는 익명으로 진행됩니다 솔직한 답변 부탁드립니다
        </p>
        <a
          href="javascript:window.history.back();"
          onClick={() => {
            setComment1('');
            setComment2('');
          }}
        >
          <div className="flex flex-row-reverse items-center">
            <p className="p-1 mt-2 font-bold hover:scale-105">뒤로가기</p>
            <TiArrowBackOutline className="cursor-pointer w-7 h-7 hover:scale-125"></TiArrowBackOutline>
          </div>
        </a>
      </div>
    </>
  );
}
