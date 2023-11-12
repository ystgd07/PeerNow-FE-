import { fetchAllSprints } from '../../apis/sprintApis';
import {
  useBackLogPageRes,
  useProjectInBackLog,
} from '../../store/BackLogStore/store';
import { AllThisSprints } from '../../store/SprintStore/store';
import { PjtNumNow } from '../../store/header/store';
import { useQuery } from 'react-query';

export default function Sprints() {
  const { nowNum } = PjtNumNow((state) => state);
  const { datalist, setDatalist } = AllThisSprints((state) => state);
  const { pjtData } = useProjectInBackLog((state) => state);
  const { currentProjectNumber } = useBackLogPageRes((state) => state);

  const { data: allSprintData, isLoading: isAllSprintData } = useQuery(
    ['fetchAllSprints', pjtData[currentProjectNumber]?.no],
    () => fetchAllSprints(pjtData[currentProjectNumber]?.no),
    {
      onSuccess: (data) => {
        console.log('fetchAllSprints :', data);
        setDatalist(data?.data?.datalist);
      },
    },
  );

  console.log('왜안되노 : ', datalist);

  return (
    <>
      <div className="gap-4 mt-3">
        <div className="bg-white rounded-lg p-3 grid grid-cols-2 gap-3">
          {datalist.map((item, idx) => (
            <div key={idx} className="p-1 px-5">
              <div className="text-xl">
                <span className="text-gray-400">{idx + 1} </span> {item.title}
              </div>
              <div className="text-left text-xs">
                {item.start_date} ~ {item.end_date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
