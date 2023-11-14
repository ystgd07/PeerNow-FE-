import { AiOutlineDownload } from 'react-icons/ai';
import BacklogStatus from './BacklogStatus';
import BacklogSprint from './BacklogSprint';
import {
  AllBacklogOfThisPjt,
  useBackLogPageRes,
  useBackNumStore,
  useProjectInBackLog,
} from '../../store/BackLogStore/store';

import { fetchBackLogList } from '../../apis/backLogApis';
import { useQuery } from 'react-query';
import { useBackLogDetailPage } from '../../store/store';
import BacklogDetailModal from './BacklogDetailModal';

export default function BacklogTbody() {
  // 전체 백로그 확인
  const { backlogData, setBacklogData } = AllBacklogOfThisPjt((state) => state);
  console.log('[BacklogTbody] 전체 백로그 확인, backlogData', backlogData);
  // 프로젝트 번호
  const { pjtData } = useProjectInBackLog((state) => state);
  console.log('[BacklogTbody] 프로젝트 번호, pjtData', pjtData);
  // 헤더 프로젝트 번호
  const { currentProjectNumber } = useBackLogPageRes((state) => state);
  // 백로그 상세페이지 모달
  const { isBackLogModalOpen, setBackLogModalOpen } = useBackLogDetailPage(
    (state) => state,
  );
  //
  const { backNum, setBackNum, setSelectedBackObj } = useBackNumStore(
    (state) => state,
  );

  console.log('[BacklogTbody] nowNum 번호 ====> ', currentProjectNumber);
  console.log('[BacklogTbody] backlogData.no 번호 ====> ', backlogData.no);

  const { data: bData, isLoading: bDataLoading } = useQuery(
    ['fetchBackLogList', pjtData[currentProjectNumber].no],
    () => fetchBackLogList(pjtData[currentProjectNumber].no),
    {
      onSuccess: (data) => {
        console.log('fetchBackLogList :', data);
        setBacklogData(data?.data?.datalist);
      },
    },
  );

  return (
    <>
      {isBackLogModalOpen && <BacklogDetailModal />}
      {backlogData.map((item, idx) => (
        <tr key={idx} className="bg-white border-b">
          <th
            scope="row"
            className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap"
          >
            <button
              className="font-medium hover:text-blue-600 cursor-pointer"
              onClick={() => {
                setBackLogModalOpen();
                setBackNum(item.no);
                setSelectedBackObj(item);
              }}
              value={item.title}
            >
              {item.title}
            </button>
          </th>
          <td className="px-6 py-2">
            <BacklogStatus
              value={
                item.status === 'todo'
                  ? '● 진행 예정 '
                  : item.status === 'ing'
                  ? '● 진행 중'
                  : '● 완료'
              }
              color={
                item.status === 'todo'
                  ? 'red'
                  : item.status === 'ing'
                  ? 'blue'
                  : 'green'
              }
            />
          </td>
          <td className="px-6 py-2">
            <BacklogSprint
              value={item.sprint_no === 0 ? '-' : item.sprint_no}
            />
          </td>
          <td className="px-6 py-2">
            <span className="flex">
              <img
                // src={item.image}
                src={`data:image/*;base64,${item.image}`}
                className="w-6 h-6 rounded-full"
                alt="백로그_담당자_이미지"
              />
              <span className="ml-1">{item.user_id}</span>
            </span>
          </td>
          {/* <td className="px-4 py-2 text-right">
              <a href={item.downloadLink} target="_blank" rel="noreferrer">
                <p className="text-xl font-medium text-blue-600">
                  <AiOutlineDownload />
                </p>
              </a>
            </td> */}
        </tr>
      ))}
    </>
  );
}
