import React from 'react';
import { FaHeartCirclePlus } from 'react-icons/fa6';
import FeedBackModal from './FeedBackModal';
import {
  useMyFeedback,
  usePeerList,
  usePeerMain,
} from '../../store/PeerStore/store';

export default function FeedbackOne() {
  const { isOpenPeerModal, setIsOpenPeerModal } = usePeerMain((state) => state);
  const { peerDatalistDto } = usePeerList((state) => state);

  return (
    <>
      <div
        onClick={() => {
          setIsOpenPeerModal();
        }}
        className="cursor-pointer bg-[white] rounded-md shadow-md text-center py-4 justify-center p-1 w-full h-1/2 mr-3 border-2 border-stone-100 hover:bg-[#F0FFF0]"
      >
        <div className="flex justify-center items-center m-3 cursor-pointer hover:scale-110">
          <p className="font-bold text-lg text-gray-700 ">지지적 피드백</p>
          <FaHeartCirclePlus className="ml-3 text-[#80E12A]" />
        </div>
      </div>
      {isOpenPeerModal && <FeedBackModal />}
    </>
  );
}
