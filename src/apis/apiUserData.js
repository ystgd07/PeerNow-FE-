import axios from 'axios';

export async function fetchUserData() {
  const res = await axios.get('/api/user/detail');
  console.log('res', res);
  return res.data;
}

export async function fetchUserUpdateData({ data, userMainDataid }) {
  console.log('data type: ', data.userMemberDto);
  const formData = new FormData();
  const jsonBlob = new Blob([JSON.stringify(data.userMemberDto)], {
    type: 'application/json',
  });
  formData.append('userMemberDto', jsonBlob);

  console.log('formData', formData);
  const res = await axios.put(
    `/api/user/change?id=${userMainDataid}`,
    formData,
  );

  console.log('res', res);
  return res.data;
}

export async function updateUserImg(file, id, filename) {
  console.log('updateUserImg:file', file);
  const formData = new FormData();

  const imgBlob = new Blob([JSON.stringify(file)], {
    type: 'multipart/form-data',
  });

  formData.append('image', file);

  const res = await axios.put(
    `/api/user/imagechange?id=${id}&fileName=${filename}`,
    formData,
  );
  return res.data;
}
