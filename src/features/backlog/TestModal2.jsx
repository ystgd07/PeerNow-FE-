import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import ModalDetail from './ModalDetail';
import { useBackLogPage } from '../../store/store';
import axios from 'axios';
import { useQuery } from 'react-query';
import { UseBackLog } from '../../store/BackLogStore/store';

export default function TestModal2() {
  const { isBackLogModalOpen, setBackLogModalOpen } = useBackLogPage(
    (state) => state,
  );
  const { setSearchRes, searchUser, setSearchUser, searchRes } = UseBackLog(
    (state) => state,
  );

  const { data: backLogUserList, isLoading } = useQuery(
    ['userList', searchUser],
    async () => {
      const res = await axios.get(
        `http://www.peernow.site/api/project/peer?peerName=${searchUser}`,
        {
          withCredentials: true,
        },
      );
      return res;
    },
    {
      enabled: !!searchUser,
      onSuccess: (data) => {
        console.log('undefined log : ', data);
        setSearchRes(data?.data?.datalist);
      },
      onError: (error) => {
        console.log('error : ', error);
      },
      refetchOnWindowFocus: false,
    },
  );
  console.log('searchList : ', backLogUserList);
  console.log('searchRes :', searchRes);

  return (
    <Transition.Root show={isBackLogModalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setBackLogModalOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="fixed inset-y-0 right-0 flex max-w-full pl-10 ">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative w-screen max-w-md ">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 left-0 flex pt-4 pr-2 -ml-8 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="relative text-gray-300 rounded-md hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setBackLogModalOpen()}
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex flex-col h-full py-6 overflow-y-scroll bg-white shadow-xl">
                    <Dialog.Title className="px-4 text-lg font-semibold leading-6 text-gray-900">
                      백로그 상세
                    </Dialog.Title>
                    <div
                      className={`scrollbar absolute z-50 scrollbar-thumb-amber-500   ${
                        !searchUser > 0 ? 'hidden' : ''
                      } h-32 py-3 mt-8 overflow-y-scroll text-sm bg-white rounded-md w-full shadow-md top-44 right-0`}
                      // onClick={}
                    >
                      {!isLoading &&
                        searchRes &&
                        searchRes.map((user, idx) => (
                          <div
                            className="flex justify-start px-2 py-2 my-2 text-gray-700 rounded-md cursor-pointer hover:text-blue-400 hover:bg-blue-100"
                            key={idx}
                          >
                            <span className="w-2 h-2 m-2 bg-gray-400 rounded-full"></span>
                            <div className="flex-grow px-2 font-medium">
                              {user.name}
                            </div>
                            <div className="text-sm font-normal tracking-wide text-gray-500">
                              {user.team ? user.team : '무소속'}
                            </div>
                          </div>
                        ))}
                    </div>
                    <ModalDetail />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
