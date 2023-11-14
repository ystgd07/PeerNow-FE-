import axios from 'axios';

export async function fetchStatusUpdateData(status, pjtNo, role) {
  console.log('pjtNo Fetch', pjtNo);

  const res = '';

  if (status === 'ACCEPT') {
    const res = await axios.put(
      `http://www.peernow.site/api/project/accept?projectNumber=${pjtNo}&role=${role}`,
    );

    return res?.data;
  }
  if (status === 'DECLINE') {
    const res = await axios.put(
      `http://www.peernow.site/api/project/decline?projectNumber=${pjtNo}`,
    );

    return res?.data;
  }

  return res?.data;
}
