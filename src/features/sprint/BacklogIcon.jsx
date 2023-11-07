import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { PjtNumNow } from '../../store/header/store';
import { AllBacklogOfThisPjt } from '../../store/BackLogStore/store';
import { fetchBackLogList } from '../../apis/backLogApis';

export default function BacklogIcon() {
  const { nowNum } = PjtNumNow((state) => state);

  // 초기 선택 상태를 설정
  const [selectedBacklogs, setSelectedBacklogs] = useState([]);

  const handleBacklogClick = (item) => {
    if (selectedBacklogs.includes(item.no)) {
      const updatedSelectedBacklogs = selectedBacklogs.filter(
        (backlog) => backlog !== item.no,
      );
      setSelectedBacklogs(updatedSelectedBacklogs);
    } else {
      setSelectedBacklogs((prevSelected) => [...prevSelected, item.no]);
    }
  };

  // 전체 백로그 확인
  const { backlogData, setBacklogData } = AllBacklogOfThisPjt((state) => state);
  console.log('[BacklogIcon] 전체 백로그 확인, backlogData', backlogData);

  const filteredBacklogs = backlogData.filter((item) => item.sprint_no === 0);

  const { data: bData, isLoading: bDataLoading } = useQuery(
    ['fetchBackLogList', nowNum],
    () => fetchBackLogList(nowNum),
    {
      onSuccess: (data) => {
        console.log('data :', data);
        setBacklogData(data?.data?.datalist);
      },
    },
  );

  return (
    <>
      {filteredBacklogs.map((item, idx) => (
        <div
          key={idx}
          className={`w-11/12 py-2 mb-1 text-center border border-gray-300 rounded-md cursor-pointer ${
            selectedBacklogs.includes(item.no)
              ? 'bg-yellow-300 border-yellow-300 text-white font-semibold'
              : ''
          }`}
          onClick={() => handleBacklogClick(item)}
        >
          <p>
            <span className="flex justify-center">
              <img
                src={item.image}
                alt="백로그_담당자_이미지"
                className="w-6 h-6 rounded-full"
              />
              <span className="ml-1">{item.title}</span>
            </span>
          </p>
        </div>
      ))}
    </>
  );
}
