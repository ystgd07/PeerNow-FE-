import { useQuery } from 'react-query';
import {
  useBackLogPageRes,
  useProjectInBackLog,
} from '../../store/BackLogStore/store';
import {
  AllThisSprints,
  useSelectedSprint,
} from '../../store/SprintStore/store';
import KanbanBorad from './KanbanBorad';
import KanbanHeader from './KanbanHeader';
import { fetchAllSprints } from '../../apis/sprintApis';
import { fetchKanbanList } from '../../apis/kanbanApis';
import { useKanbanCloums, useKanbanData } from '../../store/KanbanStore/sotre';
import { useEffect } from 'react';
import ContentLoader, { Instagram } from 'react-content-loader';
import toast from 'react-hot-toast';

export default function KanbanList() {
  const { currentProjectNumber } = useBackLogPageRes((state) => state);
  const { pjtData } = useProjectInBackLog((state) => state);
  const { setDatalist } = AllThisSprints((state) => state);
  const { sprintNo, setSprintNo } = useSelectedSprint((state) => state);
  const { setKanbanData } = useKanbanData((state) => state);
  console.log('sprint no: ', sprintNo);

  const { setComplete, setProcessing, setExpecting, setColums } =
    useKanbanCloums((state) => state);

  // const {
  //   data: allSprintData,
  //   isLoading: isAllSprintData,
  //   refetch: KanBanSprints,
  // } = useQuery(
  //   ['fetchAllSprints', pjtData[currentProjectNumber]?.no],
  //   () => fetchAllSprints(pjtData[currentProjectNumber]?.no),
  //   {
  //     enabled: false,
  //     onSuccess: (data) => {
  //       console.log('sprintData :', data);
  //       data?.data?.datalist !== null && setDatalist(data?.data?.datalist);
  //       data?.data?.datalist !== null &&
  //         setSprintNo(data?.data?.datalist[0]?.no);
  //     },
  //     onError: (error) => {
  //       console.log('error in AllSprints : ', error);
  //     },
  //   },
  // );

  const {
    data: sprintKanbanData,
    isLoading: isSprintBacklogData,
    refetch: kanbanRefetch,
  } = useQuery(['fetchKanbanList', sprintNo], () => fetchKanbanList(sprintNo), {
    refetchOnWindowFocus: false,
    // enabled: !!allSprintData,
    onSuccess: (data) => {
      // console.log('fetchKanbanList :', data);
      toast.success(`칸반보드를 불러왔습니다.`);
      setKanbanData(data?.data?.datalist);
      setExpecting(data?.data?.datalist);
      setProcessing(data?.data?.datalist);
      setComplete(data?.data?.datalist);
      setColums();
    },
    onError: (error) => {
      console.log('error in springData : ', error);
    },
  });

  // useEffect(() => {
  //   setTimeout(KanBanSprints, 1300);
  // }, []);

  return (
    <>
      <div className="m-6 bg-white rounded-lg">
        {sprintKanbanData && !isSprintBacklogData ? (
          <>
            {/* 스프린트 해더 */}
            <KanbanHeader />
            {/* 칸반보드 */}
            <div className="pb-5 overflow-y-scroll h-[30rem] scrollBar">
              <KanbanBorad />
            </div>
          </>
        ) : (
          <Instagram />
        )}
      </div>
    </>
  );
}
