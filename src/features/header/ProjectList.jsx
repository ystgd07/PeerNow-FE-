import {
  useBackLogPageRes,
  useProjectInBackLog,
} from '../../store/BackLogStore/store';
import { toggleDropdown } from '../../store/header/store';

export default function ProjectList({ index, pjt }) {
  const { setCurrentPjtNumber, currentProjectNumber, setCurrentPjtOwner } =
    useBackLogPageRes((state) => state);

  const { setPjtDetailData, setPjtData, pjtData } = useProjectInBackLog(
    (state) => state,
  );

  const { selectedDtopdownOfHeader, setSelectedDtopdownOfHeader } =
    toggleDropdown((state) => state);

  return (
    <>
      <p
        href="#"
        className="block px-4 py-2 mb-1 hover:bg-gray-100 cursor-pointer"
        onClick={() => {
          setSelectedDtopdownOfHeader();
          setCurrentPjtNumber(index);
          setCurrentPjtOwner(
            ...pjtData?.filter((e, idx) => idx === currentProjectNumber),
          );
        }}
      >
        {/* 제목 */}
        {pjt.title}
      </p>
    </>
  );
}
