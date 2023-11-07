import { createSprint } from '../../store/SprintStore/store';
import { useMutation, useQueryClient } from 'react-query';
import Checkbox from './Checkbox';
import axios from 'axios';
import Input from './Input';
import { createSprintApi } from '../../apis/sprintApis';
import { PjtNumNow } from '../../store/header/store';

export default function NewSprintCreatePage() {
  // 헤더 프로젝트 번호
  const { nowNum } = PjtNumNow((state) => state);
  console.log('[BacklogTbody] nowNum 번호 ====> ', nowNum);

  // 스프린트 생성
  const {
    setTitle,
    setDetail,
    setBacklogNo,
    setStartDate,
    setEndDate,
    addBacklogs,
    sprintBacklogDto,
    backlogs,
  } = createSprint((state) => state);

  const queryClient = useQueryClient();

  const { mutate: createAccount, isCreateLoading } = useMutation(
    createSprintApi(sprintBacklogDto),
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
