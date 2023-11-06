import axios from 'axios';

export async function fetchUserData() {
  const res = await axios.get('http://www.peernow.site/api/user/detail');
  console.log('res', res);
  return res.data;
}
