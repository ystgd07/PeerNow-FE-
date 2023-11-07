import axios from 'axios';

export async function fetchUserData() {
  const res = await axios.get('http://www.peernow.site/api/user/detail');
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
    `http://www.peernow.site/api/user/change?id=${userMainDataid}`,
    formData,
  );

  console.log('res', res);
  return res.data;
}
