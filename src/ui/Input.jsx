import React, { useState } from 'react';
import { useCreatePjtOne } from '../store/store';

export default function Input({ content, title }) {
  const [pjtValid, setPjtValid] = useState(true);
  const {
    setPjtTitle,
    setPjtDetail,
    setPjtStartDate,
    setPjtEndDate,
    setPjtObj,
    pjtObj,
    setIsValidPjt1,
    setIsValidPjt2,
  } = useCreatePjtOne((state) => state);
  const [selectedPeer, setSelectedPeer] = useState('');

  const mouseOutEvent = () => {
    if (title === '프로젝트 제목') {
      if (pjtObj.title.length > 0) {
        setPjtValid(true);
      } else {
        setPjtValid(false);
      }
    }
    if (title === '프로젝트 설명') {
      if (pjtObj.detail.length > 0) {
        setPjtValid(true);
      } else {
        setPjtValid(false);
      }
    }
    if (title === '팀원 선택') {
      if (Object.keys(pjtObj.peer_id).length > 0) {
        setPjtValid(true);
      } else {
        setPjtValid(false);
      }
    }
  };

  const onChangeEventHandler = (e) => {
    if (title === '프로젝트 제목') {
      setPjtTitle(e.target.value);
      setIsValidPjt1(pjtObj);
    }

    if (title === '프로젝트 설명') {
      setPjtDetail(e.target.value);
      setIsValidPjt1(pjtObj);
    }
    if (title === '팀원 선택') {
      setSelectedPeer(e.target.value);
    }
  };

  return (
    <div className="mb-6">
      <p className="mb-3 font-semibold">{title}</p>
      <input
        type="email"
        id="email"
        className={`shadow-sm bg-gray-50 border ${
          pjtValid ? 'border-gray-300' : 'border-red-500'
        } text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${
          pjtValid ? 'dark:focus:ring-blue-500' : 'dark:focus:ring-red-600'
        } dark:focus:border-blue-500 dark:shadow-sm-light focus:outline-none focus:ring `}
        placeholder={content}
        value={`${
          title === '프로젝트 제목'
            ? pjtObj.title
            : title === '팀원 선택'
            ? selectedPeer
            : pjtObj.detail
        }`}
        onChange={onChangeEventHandler}
        onMouseOut={mouseOutEvent}
        required
      />

      {pjtValid ? (
        ''
      ) : (
        <p class="mt-1 text-sm text-red-600 dark:text-red-500 p-1">
          <span class="font-medium">필수 입력칸 입니다.</span> 입력해주세요.
        </p>
      )}
    </div>
  );
}
