import React from 'react';
import { useUserMain } from '../../store/UserMain/store';
import { useMutation, QueryClient } from 'react-query';
import { fetchUserData, fetchUserUpdateData } from '../../apis/apiUserData';
import { useForm } from 'react-hook-form';
export default function UserUpdateModal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userMemberDto: {
        name: '',
        image: '',
        mail: '',
        phone: '',
        team: '',
      },
    },
  });
  const {
    setIsOpenUpdateModal,
    userMainData,
    modalState,
    updateTeam,
    updatePhone,
    updateMail,
  } = useUserMain((state) => state);
  const queryClient = new QueryClient();

  const stateQuarter =
    modalState === '이메일'
      ? updateMail
      : modalState === '전화번호'
      ? updatePhone
      : updateTeam;

  const placeholderStatus =
    modalState === '이메일'
      ? userMainData.mail
      : modalState === '전화번호'
      ? userMainData.phone
      : userMainData.team;

  const { mutate: updateUserData, isUpdateLoading } = useMutation(
    fetchUserUpdateData,
    {
      onSuccess: (user) => {
        console.log('Success : ', user);
        fetchUserData();
        queryClient.invalidateQueries();
      },
      onError: (error) => {
        console.log('Error', error);
      },
    },
  );

  return (
    <div
      id="authentication-modal"
      tabindex="-1"
      aria-hidden="true"
      className={`fixed  top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-blur-md`}
    >
      <div className="relative w-full max-w-md max-h-full top-1/4 left-1/3 ">
        <div className="bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="authentication-modal"
            onClick={setIsOpenUpdateModal}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <form
            onSubmit={handleSubmit((data) => {
              console.log('form datatype : ', typeof data);
              updateUserData({ data, userMainDataid: userMainData.id });
              console.log('userMainData.id : ', userMainData.id);
            })}
            className="px-6 py-6 lg:px-8"
          >
            <h2 className="mb-4 text-xl font-medium text-gray-900 underline dark:text-white">
              {modalState} 수정
            </h2>
            <input
              defaultValue="test"
              {...register('userMemberDto.mail')}
              type={`${modalState === '이메일' ? 'email' : 'text'}`}
              placeholder={placeholderStatus}
            ></input>

            <div className="flex justify-center">
              <input
                type="submit"
                className={`w-1/2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-6 `}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
