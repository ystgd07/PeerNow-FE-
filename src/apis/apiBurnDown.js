import axios from 'axios';

export async function fetchBurnDownData(sprint_no) {
  console.log('sprint_no', sprint_no);
  const res = await axios.get(
    `http://www.peernow.site/api/kanban/burndown?sprint_no = ${sprint_no}`,
  );

  console.log('res', res);
  return res.data;
}
