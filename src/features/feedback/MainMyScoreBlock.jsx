import { usePeerEv } from '../../store/PeerStore/store';

export default function MainMyScoreBlock() {
  const { peerEvDto } = usePeerEv((state) => state);
  return (
    <>
      <p className="m-2 ml-3 row-span-2">동료들이 평가한 나의 점수는</p>
      <div className="text-end font-bold mr-5 -mt-5">
        <span className="text-5xl m-1">{peerEvDto.avg}</span>
        <span className="text-4xl text-gray-400">/50</span>
      </div>
    </>
  );
}
