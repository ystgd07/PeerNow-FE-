import { useBackLogPage } from '../../store/store';
import CreateButton from '../../ui/CreateButton';

export default function BacklogHeader() {
  const { setBackLogModalOpen } = useBackLogPage((state) => state);
  return (
    <div className="flex items-center justify-between mx-1">
      <div className="mx-3 text-3xl text-slate-700">백로그</div>
      <span>
        <CreateButton value={'이슈 만들기'} event={setBackLogModalOpen} />
      </span>
    </div>
  );
}
