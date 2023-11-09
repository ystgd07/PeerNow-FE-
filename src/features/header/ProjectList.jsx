import {
  useBackLogPageRes,
  useProjectInBackLog,
} from '../../store/BackLogStore/store';

export default function ProjectList({ pjt }) {
  const {
    setCurrentPjtNumber,
    currentProjectNumber,
    setCurrentPjtOwner,
    currentProjectData,
  } = useBackLogPageRes((state) => state);

  const { setPjtDetailData, setPjtData, pjtData } = useProjectInBackLog(
    (state) => state,
  );

  console.log(
    'pjtData vaildate: ',
    ...pjtData.filter((e, idx) => e.no === currentProjectNumber),
  );

  console.log('pjtNumber in current : ', currentProjectNumber);
  console.log('pjtOWner : ', currentProjectData);
  return (
    <>
      <p
        href="#"
        className="block px-4 py-2 mb-1 hover:bg-gray-100 cursor-pointer"
        onClick={() => {
          setCurrentPjtNumber(pjt.no);
          setCurrentPjtOwner(
            ...pjtData.filter((e, idx) => e.no === currentProjectNumber),
          );
        }}
      >
        {/* 제목 */}
        {pjt.title}
      </p>
    </>
  );
}
