import axios from 'axios';
export const createBackLogApi = async (data) => {
  axios.post('https://www.peernow.site/api/project/backlog', data);
};
