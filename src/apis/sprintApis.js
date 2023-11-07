import axios from 'axios';

// 스프린트 생성
export async function createSprintApi(
  pjtNum,
  { title, detail, backlog_no, start_date, end_date },
  backlogDto,
) {
  const res = await axios.post(
    `https://www.peernow.site/api/project/sprint?project_no=${pjtNum}`,
    {
      title,
      detail,
      backlog_no,
      start_date,
      end_date,
    },
    backlogDto,
  );
  return res.data; // API 응답 데이터 반환
}

// 미등록 백로그 가져오기
export const sprintBacklogApi = async (pjtNum) => {
  const res = await axios.get(
    `https://www.peernow.site/api/kanban/others?project_no=${pjtNum}`,
    {
      withCredentials: true,
    },
  );
  return res;
};
