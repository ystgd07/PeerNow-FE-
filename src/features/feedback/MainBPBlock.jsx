import { FaCrown } from 'react-icons/fa';
import { usePeerEv } from '../../store/PeerStore/store';

export default function MainBPBlock() {
  const { setPeerEvDto, peerEvDto } = usePeerEv((state) => state);
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center ml-4">
          <FaCrown className="font-bold text-3xl text-amber-500"></FaCrown>
          <p className="ml-5 font-semibold mt-2">최고의 동료</p>
        </div>
        <div className="text-right flex justify-center items-center  mt-1">
          <img
            src="https://source.unsplash.com/random/?"
            alt="최고의동료_이미지"
            className="text-sm mr-2 w-10 h-10 rounded-full"
          />
          <span className="text-3xl font-semibold">{peerEvDto.best_name}</span>
        </div>
      </div>
    </>
  );
}
