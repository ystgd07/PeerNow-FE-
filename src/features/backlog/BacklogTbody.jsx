import { AiOutlineDownload } from 'react-icons/ai';
import BacklogStatus from './BacklogStatus';
import BacklogSprint from './BacklogSprint';
import {
  AllBacklogOfThisPjt,
  useProjectInBackLog,
} from '../../store/BackLogStore/store';
import { fetchBackLogList } from '../../apis/backLogApis';
import { useQuery } from 'react-query';
import { PjtNumNow } from '../../store/header/store';

export default function BacklogTbody() {
  // 전체 백로그 확인
  const { backlogData, setBacklogData } = AllBacklogOfThisPjt((state) => state);
  console.log('[BacklogTbody] 전체 백로그 확인, backlogData', backlogData);
  // 프로젝트 번호
  const { pjtData } = useProjectInBackLog((state) => state);
  console.log('[BacklogTbody] 프로젝트 번호, pjtData', pjtData);
  // 헤더 프로젝트 번호
  const { nowNum } = PjtNumNow((state) => state);
  backlogData.no = nowNum;
  console.log('[BacklogTbody] nowNum 번호 ====> ', nowNum);
  console.log('[BacklogTbody] backlogData.no 번호 ====> ', backlogData.no);

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
      {backlogData.map((item, idx) => (
        <tr key={idx} className="bg-white border-b">
          <th
            scope="row"
            className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap"
          >
            <a href="#" className="font-medium hover:text-blue-600">
              {item.title}
            </a>
          </th>
          <td className="px-6 py-2">
            <BacklogStatus
              value={
                item.status === 'todo'
                  ? '진행 예정'
                  : item.status === 'ing'
                  ? '진행 중'
                  : '완료'
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
            <img
              src={item.image}
              className="w-6 h-6 rounded-full"
              alt="백로그_담당자_이미지"
            />
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
