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
