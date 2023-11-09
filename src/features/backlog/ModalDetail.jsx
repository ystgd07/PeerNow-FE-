import {
  UseBackLog,
  createBackLog,
  useBackLogPageRes,
} from '../../store/BackLogStore/store';
import { useMutation, useQueryClient } from 'react-query';
import ModalRadio from './ModalRadio';
import { createBackLogApi } from '../../apis/backLogApis';
import ModalSearch from './ModalSearch';
import axios from 'axios';

export default function ModalDetail() {
  // 백로그 유저 서치
  const { setSearchRes, searchUser, setSearchUser, searchRes } = UseBackLog(
    (state) => state,
  );
  // 백로그 생성
  const {
    setUserId,
    setStatus,
    setTitle,
    setDetail,
    addFileName,
    backlogDto,
    backFileDto,
  } = createBackLog((state) => state);

  // 현재 프로젝트
  const {
    currentProjectNumber,
    currentSearchUser,
    setCurrentSearcUser,
    currentBackLogMananger,
  } = useBackLogPageRes((state) => state);

  console.log('currentProjectNumber :', currentProjectNumber);

  const { mutate: createMutateOfBackLog, isLoading: isCreateBackLog } =
    useMutation(
      () => createBackLogApi(backlogDto, backFileDto, currentProjectNumber),
      {
        onSuccess: (user) => {
          console.log('Success backLog : ', user);
        },
        onError: (error) => {
          console.log('Error', error);
        },
      },
    );

  return (
    <>
      <div>
        <div className="relative mt-6 flex-1 px-4 sm:px-6">
          <ModalRadio onChange={(e) => setStatus(e.target.value)} />
          <input
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 w-full  border-gray-300 p-2 mb-4 rounded-md"
            placeholder=" *무엇을 해야합니까"
            value={backlogDto.title}
          />
          <div
            name="user_id"
            className="border-2 w-full border-gray-300 p-2 mb-4 rounded-md"
            onClick={setCurrentSearcUser}
          >
            <div>{currentBackLogMananger}</div>
          </div>
          <ModalSearch visible={currentSearchUser} />
          <input
            name="detail"
            onChange={(e) => setDetail(e.target.value)}
            className="border-2 w-full border-gray-300 p-2 mb-4 rounded-md"
            placeholder="설명을 입력할 수 있습니다"
            value={backlogDto.detail}
          />
          <div className="items-center">
            <input
              type="file"
              name="name"
              onChange={(e) => {
                addFileName(e.target.files[0]);
              }}
              className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold"
            />
          </div>
          <div className="float-right my-2">
            <button
              className="text-right mr-1 -mb-6"
              onClick={() => {
                console.log('check file111: ', backFileDto);
                console.log('currentProjectNumber1 :', currentProjectNumber);

                createMutateOfBackLog(
                  backlogDto,
                  backFileDto,
                  currentProjectNumber,
                );
              }}
            >
              <span
                className={`text-lg bg-gray-300 p-1 px-4 rounded-md hover:bg-gray-400 `}
              >
                완료
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
