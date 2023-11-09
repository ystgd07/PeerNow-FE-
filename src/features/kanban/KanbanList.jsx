import { useQuery } from 'react-query';
import { useBackLogPageRes } from '../../store/BackLogStore/store';
import {
  AllThisSprints,
  useSelectedSprint,
} from '../../store/SprintStore/store';
import KanbanBorad from './KanbanBorad';
import KanbanHeader from './KanbanHeader';
import { fetchAllSprints } from '../../apis/sprintApis';
import { fetchKanbanList } from '../../apis/kanbanApis';
import { useKanbanData } from '../../store/KanbanStore/sotre';

export default function KanbanList() {
  const { currentProjectNumber } = useBackLogPageRes((state) => state);
  const { datalist, setDatalist } = AllThisSprints((state) => state);
  const {
    projectNo,
    sprintNo,
    selectedSprintTitle,
    selectedValidate,
    setSelectedValidate,
    setSprintNo,
  } = useSelectedSprint((state) => state);
  const { setKanbanData } = useKanbanData((state) => state);
  console.log('sprint no: ', sprintNo);
  const { data: allSprintData, isLoading: isAllSprintData } = useQuery(
    ['fetchAllSprints', currentProjectNumber],
    () => fetchAllSprints(currentProjectNumber),
    {
      onSuccess: (data) => {
        console.log('fetchAllSprints :', data);
        setDatalist(data?.data?.datalist);
        setSprintNo(data?.data?.datalist[0].project_no);
      },
    },
  );

  const { data: sprintKanbanData, isLoading: isSprintBacklogData } = useQuery(
    ['fetchKanbanList', sprintNo],
    () => fetchKanbanList(sprintNo),
    {
      enabled: !!allSprintData,
      onSuccess: (data) => {
        console.log('fetchKanbanList :', data);
        setKanbanData(data?.data?.datalist);
      },
    },
  );

  return (
    <>
      <div className="bg-white rounded-lg m-6">
        {/* 스프린트 해더 */}
        <KanbanHeader />
        {/* 칸반보드 */}
        <div className="pb-5">
          <KanbanBorad />
        </div>
      </div>
    </>
  );
}
