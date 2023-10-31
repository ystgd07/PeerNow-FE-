import Checkbox from './Checkbox';
import Input from './Input';

export default function NewSprintCreatePage() {
  return (
    <>
      <div className="bg-white rounded-lg w-full h-auto my-2 p-5">
        <div className="grid grid-cols-2 gap-3">
          <Input value={' * 무엇을 해야합니까'} />
          <Input value={' * 기간을 설정해주세요'} />
          <span className="col-span-2">
            <Input value={'  설명을 입력하실 수 있습니다'} />
          </span>
        </div>
        {/* 백로그 선택 칸 - 모든 백로그 */}
        <Checkbox />
      </div>
    </>
  );
}
