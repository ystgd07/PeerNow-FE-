import React, { useRef } from 'react';
import { useImage, useUserMain } from '../../store/UserMain/store';
import { ImProfile } from 'react-icons/im';
import { IoInformationCircleSharp } from 'react-icons/io';

export default function UserHeader() {
  const { userMainData, setIsOpenDropdown } = useUserMain((state) => state);
  const { setUserImg, stateImageData } = useImage((state) => state);
  const imgRef = useRef();

  console.log('stateImageData:', stateImageData);
  return (
    <>
      <div className="flex items-center gap-3 mb-3">
        <ImProfile className="text-3xl" />
        <p className="text-xl font-bold">프로필 사진</p>
      </div>
      <div className="border-2 border-collapse border-slate-200 rounded-md shadow-lg h-Profile w-full bg-white">
        <div className="relative w-full h-3/5 bg-gradient-to-r from-peerColor to-slate-50">
          <img
            className="absolute w-24 h-24 border-2 border-white rounded-full cursor-pointer top-1/3 left-10"
            src={stateImageData.userImg}
          ></img>
          {/* */}
          <input
            type="file"
            accept="image/*"
            ref={imgRef}
            onChange={() => {
              console.log('img change!!', imgRef.current.files[0]);
              const file = imgRef.current.files[0];
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onloadend = () => {
                setUserImg(reader.result);
              };
            }}
          />
        </div>
        <div className="flex flex-row-reverse p-3">
          <div className="flex flex-row items-center mt-3">
            <p className="mr-3 text-lg font-bold">
              {userMainData.name.toUpperCase()}
            </p>
            <p className="text-sm font-semibold">({userMainData.mail})</p>
          </div>
        </div>
      </div>
    </>
  );
}
