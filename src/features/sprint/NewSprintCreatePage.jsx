import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './custom-datepicker.css';
import { createSprint } from '../../store/SprintStore/store';
import Checkbox from './Checkbox';
import Input from './Input';
import { PjtNumNow } from '../../store/header/store';
import { ko } from 'date-fns/esm/locale';
import { format } from 'date-fns';
export default function NewSprintCreatePage() {
  // 헤더 프로젝트 번호
  const { nowNum } = PjtNumNow((state) => state);
  console.log('[NewSprintCreatePage] nowNum 번호 ====> ', nowNum);
  // 스프린트 생성
  const {
    setTitle,
    setDetail,
    setStartDate,
    setEndDate,
    setBacklogs,
    sprintDto,
  } = createSprint((state) => state);
  console.log('sprintDto : ', sprintDto.start_date);

  // date picker

  // setStartDate, setEndDate
  const handleStartDateChange = (date) => {
    // setSelectedStartDate(date);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    console.log('test date: ', date);
    setStartDate(`${year}-${month}-${day}`);
  };
  const handleEndDateChange = (date) => {
    // setSelectedEndDate(date);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    setEndDate(`${year}-${month}-${day}`);
  };

  // setBacklogs
  const handleBacklogSelection = (selectedBacklogs) => {
    setBacklogs(selectedBacklogs);
  };

  return (
    <>
      <div className="bg-white rounded-lg w-full h-auto my-2 p-5">
        <div className="flex gpa-3 flex-col">
          <span className="col-span-2">
            <Input
              value={' * 무엇을 해야합니까'}
              onChange={(e) => setTitle(e.target.value)}
            />
          </span>
          <div className="flex w-full  ">
            <div className="w-1/2 mr-4">
              <DatePicker
                minDate={new Date()}
                locale={ko}
                selected={new Date(sprintDto.start_date)}
                onChange={handleStartDateChange}
                dateFormat="yyyy.MM.dd"
                isClearable
                placeholderText=" * 시작 시간을 설정해주세요"
                className="border-gray-300 rounded-md border-2 w-96 custom-datepicker"
              />
            </div>
            <div className="w-1/2">
              <DatePicker
                minDate={sprintDto.start_date || new Date()}
                locale={ko}
                selected={new Date(sprintDto.end_date)}
                onChange={handleEndDateChange}
                dateFormat="yyyy.MM.dd"
                isClearable
                placeholderText=" * 종료 기간을 설정해주세요"
                className="border-gray-300 rounded-md border-2 w-96 custom-datepicker"
              />
            </div>
          </div>

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
