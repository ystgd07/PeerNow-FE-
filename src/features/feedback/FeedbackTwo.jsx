import React from 'react';
import { FaHeartCircleMinus } from 'react-icons/fa6';
import { usePeerMain } from '../../store/PeerStore/store';
import FeedbackModalTwo from './FeedbackModalTwo';

export default function FeedbackTwo() {
  const { isOpenPeerModal2, setIsOpenPeerModal2 } = usePeerMain(
    (state) => state,
  );
  return (
    <>
      <div
        onClick={() => {
          setIsOpenPeerModal2();
        }}
        className="cursor-pointer py-4 p-1 justify-center bg-white rounded-md shadow-md text-center w-full h-1/2 border-2 border-stone-100 hover:bg-[#FFF0F5]"
      >
        <div className="flex justify-center items-center m-3 cursor-pointer hover:scale-110">
          <p className="font-bold bold text-lg text-gray-700 ">교정적 피드백</p>
          <FaHeartCircleMinus className="ml-3 text-[#FF5675] " />
        </div>
      </div>
      {isOpenPeerModal2 && <FeedbackModalTwo />}
    </>
  );
}
