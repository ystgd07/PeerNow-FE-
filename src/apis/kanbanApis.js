import axios from 'axios';

// 칸반보드
export const fetchKanbanList = async (SprintNum) => {
  const res = await axios.get(
    `http://www.peernow.site/api/kanban?sprint_no=${SprintNum}`,
    {
      withCredentials: true,
    },
  );

  return res;
};

export const updateKanbanList = async (no, status) => {
  console.log('update status', status);
  console.log('update no', no);
  let real = '';
  if (status === '진행 예정') real = 'todo';
  if (status === '진행 중') real = 'ing';
  if (status === '완료') real = 'done';
  const res = await axios.put(
    `http://www.peernow.site/api/project/backlog/status?no=${no}&status=${real}`,
    {
      withCredentials: true,
    },
  );
  return res;
};
