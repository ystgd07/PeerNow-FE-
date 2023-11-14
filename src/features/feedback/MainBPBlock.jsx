import { FaCrown } from 'react-icons/fa';
import { usePeerEv } from '../../store/PeerStore/store';

export default function MainBPBlock() {
  const { setPeerEvDto, peerEvDto } = usePeerEv((state) => state);
  return (
    <>
      <div className="flex flex-row items-center justify-center">
        <div className="flex items-center ml-4">
          <FaCrown className="mt-3 font-bold text-3xl text-[#FFBE0A]"></FaCrown>

          <p className="ml-3 text-lg font-semibold mt-5 mr-6 items-center text-gray-700">
            최고의 동료
          </p>
        </div>
        <div className="text-right flex justify-center items-center mt-3">
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
