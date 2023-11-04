import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { createProjectApi } from '../apis/apiAuth';
import { useCreatePjtOne, useProjectModal } from '../store/store';

export default function ButtonPakage({ value, event, disabled }) {
  const {
    pjtObj,
    setIsValidPjt1,
    isValidPjt1,
    selectedUser,
    setPjtObj,
    reset,
  } = useCreatePjtOne((state) => state);
  const { setPjtModalFalse } = useProjectModal((state) => state);

  const queryClient = useQueryClient();

  const { mutate: createPjt, isCreateLoading } = useMutation(
    () => createProjectApi(pjtObj),
    {
      onSuccess: (user) => {
        console.log('Success : ', user);
        queryClient.invalidateQueries();
        reset();
        setPjtModalFalse();
      },
      onError: (error) => {
        console.log('Error', error);
      },
    },
  );

  return (
    <div
      className={`ext-white ${
        !disabled ? 'bg-blue-700' : 'bg-slate-400 opacity-40'
      } focus:ring-2 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 w-full dark:hover:bg-blue-700 dark:focus:ring-blue-800   ${
        disabled ? 'cursor-not-allowed' : 'cursor-pointer'
      }`}
      onClick={value === '제출' ? createPjt : event}
      disabled={disabled}
    >
      <p className="block text-slate-300"> {value}</p>
    </div>
  );
}
