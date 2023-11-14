import axios from 'axios';

export const postEvData = async (currentProjectNumber, selectPeerId) => {
  const res = await axios.post(
    `http://www.peernow.site/api/peer/evaluation?projectNumber=${currentProjectNumber}&peerId=${selectPeerId}`,
    {
      withCredentials: true,
    },
  );
  return res;
};
