import { fetchAllSprints } from '../../apis/sprintApis';
import {
  useBackLogPageRes,
  useProjectInBackLog,
} from '../../store/BackLogStore/store';
import {
  AllThisSprints,
  useSelectedSprint,
} from '../../store/SprintStore/store';
import { PjtNumNow } from '../../store/header/store';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

export default function Sprints() {
  const { nowNum } = PjtNumNow((state) => state);
  const { datalist, setDatalist, recentDate, setRecentDate } = AllThisSprints(
    (state) => state,
  );
  const { pjtData } = useProjectInBackLog((state) => state);
  const { currentProjectNumber } = useBackLogPageRes((state) => state);
  const { setSprintNo, setProjectNo, setSprintTitle, setSelectedValidate } =
    useSelectedSprint((state) => state);

  const { data: allSprintData, isLoading: isAllSprintData } = useQuery(
    ['fetchAllSprints', pjtData[currentProjectNumber]?.no],
    () => fetchAllSprints(pjtData[currentProjectNumber]?.no),
    {
      onSuccess: (data) => {
        console.log('fetchAllSprints :', data);
        setDatalist(data?.data?.datalist);
        setRecentDate();
      },
    },
  );

  console.log('왜 안되노 : ', datalist);
  console.log('왜 안되긴! :', recentDate);
  return (
    <>
      <Link to={`/home/kanban`}>
        <div className="gap-4 mt-3">
          <div className="grid grid-cols-4 gap-4">
            {datalist?.map((item, idx) => {
              const startDate = item?.start_date.split(' ')[0];
              const endDate = item?.end_date.split(' ')[0];
              return (
                <div
                  key={idx}
                  // className="p-4 border rounded-lg shadow-md transition-transform transform hover:scale-105"
                  className="p-4 border rounded-lg transition-transform transform hover:scale-105"
                  onClick={() => {
                    setProjectNo(item?.project_no);
                    setSprintNo(item?.no);
                    setSprintTitle(item?.title);
                    // setSelectedValidate();
                  }}
                >
                  <div className="text-xl font-semibold mb-2">
                    <span className="text-gray-400">{idx + 1} </span>{' '}
                    {item?.title}
                  </div>
                  <div className="text-left text-xs text-gray-500 mb-4">
                    {startDate} ~ {endDate}
                  </div>
                  {/* <button className="bg-blue-500 text-white px-3 py-1 rounded-full focus:outline-none focus:shadow-outline-blue">
                  자세히 보기
                </button> */}
                </div>
              );
            })}
          </div>
        </div>
      </Link>
    </>
  );
}
