import CreateButton from '../../ui/CreateButton';

export default function BacklogHeader() {
  return (
    <div className="flex justify-between items-center mx-1">
      <div className="text-3xl text-slate-700 mx-3">백로그</div>
      <CreateButton value={'이슈 만들기'} />
    </div>
  );
}
