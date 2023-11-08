import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { createSprint } from '../../store/SprintStore/store';
import { useMutation, useQueryClient } from 'react-query';
import Checkbox from './Checkbox';
import Input from './Input';
import { createSprintApi } from '../../apis/sprintApis';
import { PjtNumNow } from '../../store/header/store';
import { ko } from 'date-fns/esm/locale';

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

  // date picker
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  // "YYYY-MM-DD"
  const formatDate = (date) => {
    if (date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
    return '';
  };
  // setStartDate, setEndDate
  const handleStartDateChange = (date) => {
    setSelectedStartDate(date);
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setSelectedEndDate(date);
    setEndDate(date);
  };

  // setBacklogs
  const handleBacklogSelection = (selectedBacklogs) => {
    setBacklogs(selectedBacklogs);
  };

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
          <DatePicker
            minDate={new Date()}
            locale={ko}
            selected={selectedStartDate}
            onChange={handleStartDateChange}
            dateFormat="yyyy-MM-dd"
            isClearable
            placeholderText=" * 시작 시간을 설정해주세요"
            className="border-gray-300 rounded-md border-2 w-full custom-datepicker"
          />
          <DatePicker
            minDate={new Date()}
            locale={ko}
            selected={selectedEndDate}
            onChange={handleEndDateChange}
            dateFormat="yyyy-MM-dd"
            isClearable
            placeholderText=" * 종료 기간을 설정해주세요"
            className="border-gray-300 rounded-md border-2 w-full custom-datepicker"
          />
          <span className="col-span-2">
            <Input
              value={'  설명을 입력하실 수 있습니다'}
              onChange={(e) => setDetail(e.target.value)}
            />
          </span>
        </div>
        {/* 백로그 선택 칸 - 모든 백로그 */}
        <Checkbox handleBacklogSelection={handleBacklogSelection} />
      </div>
    </>
  );
}
