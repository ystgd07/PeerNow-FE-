import React from 'react';
import { createSprint } from '../../store/SprintStore/store';
import { useMutation, useQueryClient } from 'react-query';
import { createSprintApi } from '../../apis/sprintApis';
import { PjtNumNow } from '../../store/header/store';
import { useNavigate } from 'react-router-dom';

export default function Button() {
  const { nowNum } = PjtNumNow((state) => state);
  const { sprintDto, backlogDto } = createSprint((state) => state);
  const navigate = useNavigate();

  console.log('[Sprint] Button - sprintDto ::: ', sprintDto);
  console.log('[Sprint] Button - backlogDto ::: ', backlogDto);

  const queryClient = useQueryClient();

  const { mutate: createSprintMutate, isLoading: isCreateLoading } =
    useMutation(() => createSprintApi(nowNum, sprintDto, backlogDto), {
      onSuccess: (user) => {
        console.log('Success : ', user);
        queryClient.invalidateQueries();
        navigate('/home/MyPage');
      },
      onError: (error) => {
        console.log('Error', error);
      },
    });

  // 버튼 클릭 시
  const handleCreateSprint = () => {
    console.log('nowNum sprintDto backlogDto', nowNum, sprintDto, backlogDto);
    // createSprint();
  };

  return (
    <div
      className="bg-gray-300 rounded-lg h-auto float-right p-2 px-14 text-lg mt-2 mb-20 hover:bg-gray-400"
      onClick={createSprintMutate}
      disabled={isCreateLoading}
    >
      {isCreateLoading ? '생성중...' : '생성'}
    </div>
  );
}
