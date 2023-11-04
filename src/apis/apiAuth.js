import axios from 'axios';
import { format } from 'date-fns';

const JWT_EXPIRY_TIME = 24 * 3600 * 1000;

//로그인,계정생성 api
export async function registApi({ id, pw, name }) {
  const res = await axios.post('http://www.peernow.site/api/user/join', {
    id,
    pw,
    name,
  });
}

export async function loginApi(form) {
  console.log('form', form);

  const res = await axios
    .post(`http://www.peernow.site/api/user/login`, form, {
      withCredentials: true,
    })
    .then((res) => {
      console.log('res', res);
      const accessToken = res.data.tokenInfo.accessToken;
      console.log('accessToken', accessToken);
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    })
    .catch((err) => {
      console.error(err);
    });

  const onSilentRefresh = () => {
    axios
      .post('/referesh', form)
      .then(onLoginSuccess)
      .catch((error) => {
        console.log(error);
      });
  };

  const onLoginSuccess = (res) => {
    const { accessToken } = res.data.token.accessToken;

    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

    setTimeout(onSilentRefresh, JWT_EXPIRY_TIME);
  };
}

//프로젝트 생성 api(post)

export async function createProjectApi(pjtObj) {
  pjtObj.start_date = format(pjtObj.start_date, 'yyyy-MM-dd');
  pjtObj.end_date = format(pjtObj.end_date, 'yyyy-MM-dd');
  const res = await axios.post('http://www.peernow.site/api/project', pjtObj);
}
