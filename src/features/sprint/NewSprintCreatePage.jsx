import { createSprint } from '../../store/SprintStore/store';
import { useMutation, useQueryClient } from 'react-query';
import Checkbox from './Checkbox';
import Input from './Input';
import { createSprintApi } from '../../apis/sprintApis';
import { PjtNumNow } from '../../store/header/store';

export default function NewSprintCreatePage() {
  // 헤더 프로젝트 번호
  const { nowNum } = PjtNumNow((state) => state);
  console.log('[NewSprintCreatePage] nowNum 번호 ====> ', nowNum);

  // 스프린트 생성
  const {
    sprintDto,
    backlogDto,
    setTitle,
    setDetail,
    setStartDate,
    setEndDate,
    setBacklogs,
  } = createSprint((state) => state);

  const queryClient = useQueryClient();

  const { mutate: createAccount, isCreateLoading } = useMutation(
    () => createSprintApi(nowNum, sprintDto, backlogDto),
    {
      onSuccess: (user) => {
        console.log('Success : ', user);
        queryClient.invalidateQueries();
      },
      onError: (error) => {
        console.log('Error', error);
      },
    },
  );

  return (
    <>
      <div className="bg-white rounded-lg w-full h-auto my-2 p-5">
        <div className="grid grid-cols-2 gap-3">
          <span className="col-span-2">
            <Input
              value={' * 무엇을 해야합니까'}
              onChange={(e) => setTitle(e.target.value)}
            />
          </span>
          <Input
            value={' * 시간 기간을 설정해주세요'}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <Input
            value={' * 종료 기간을 설정해주세요'}
            onChange={(e) => setEndDate(e.target.value)}
          />
          <span className="col-span-2">
            <Input
              value={'  설명을 입력하실 수 있습니다'}
              onChange={(e) => setDetail(e.target.value)}
            />
          </span>
        </div>
        {/* 백로그 선택 칸 - 모든 백로그 */}
        <Checkbox />
      </div>
    </>
  );
}
