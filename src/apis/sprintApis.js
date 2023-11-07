import axios from 'axios';

// 스프린트 생성
export const createSprintApi = async (pjtNum) => {
  const res = axios.post(
    `https://www.peernow.site/api/project/sprint?project_no=${pjtNum}`,
    {
      withCredentials: true,
    },
  );
  return res;
};

// 미등록 백로그 가져오기
export const sprintBacklogApi = async (pjtNum) => {
  const res = axios.get(
    `https://www.peernow.site/api/kanban/others?project_no=${pjtNum}`,
    {
      withCredentials: true,
    },
  );
  return res;
};
