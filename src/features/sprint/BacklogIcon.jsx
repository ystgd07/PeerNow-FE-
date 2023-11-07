import React from 'react';
import { sprintBacklogApi } from '../../apis/sprintApis';
import { useQuery } from 'react-query';
import { PjtNumNow } from '../../store/header/store';
import { addNoSprintBacklogs } from '../../store/SprintStore/store';

export default function BacklogIcon() {
  // 헤더 프로젝트 번호
  const { nowNum } = PjtNumNow((state) => state);
  console.log('[BacklogIcon] nowNum 번호 ====> ', nowNum);
  // 스프린트 없는 백로그
  const { noSprintBacklog, setNoSprintBacklog } = addNoSprintBacklogs(
    (state) => state,
  );
  noSprintBacklog.project_no = nowNum;
  console.log(
    '[BacklogIcon] noSprintBacklog.project_no 번호 ====> ',
    noSprintBacklog.project_no,
  );

  const { data: sbData, isLoading: sbDataLoading } = useQuery(
    ['sprintBacklogApi', nowNum],
    () => sprintBacklogApi(nowNum),
    {
      onSuccess: (data) => {
        console.log('data :', data);
        setNoSprintBacklog(data?.data?.datalist);
      },
    },
  );

  return (
    <>
      {noSprintBacklog.map((item, idx) => (
        <div
          key={idx}
          className="w-11/12 py-2 mb-1 text-center border border-gray-300 rounded-md"
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
