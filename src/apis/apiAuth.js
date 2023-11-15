import axios from 'axios';
import { format } from 'date-fns';
import { getCookie, setCookie } from '../Cookies/cookie';

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
    .post(`https://www.peernow.site/api/user/login`, form, {
      withCredentials: true,
    })
    .then((res) => {
      console.log('res', res);
      const accessToken = res.data.tokenInfo.accessToken;
      console.log('accessToken', accessToken);
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      let cookie = getCookie('refreshToken');
      console.log('getCookie :');
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

export const updateApi = async (projectNumber, data) => {
  console.log('projectNumberdata', data);

  const res = await axios.put(
    `http://www.peernow.site/api/project/change?projectNumber=${projectNumber}`,
    data,
  );
};

//프로젝트 생성 api(post)
export async function createProjectApi(pjtObj) {
  console.log('pjtObj입니다.', pjtObj);
  pjtObj.start_date = format(pjtObj.start_date, 'yyyy-MM-dd');
  pjtObj.end_date = format(pjtObj.end_date, 'yyyy-MM-dd');
  const res = await axios.post('http://www.peernow.site/api/project', pjtObj);
}

// 이미지 가져오기 - 파일 객체 자체를 던져줌요
export const getUserImg = async () => {
  const res = await axios.get(`http://www.peernow.site/api/user/userimg`);
  return res;
};

// 로그아웃
export async function logoutApi() {
  try {
    await axios.post(
      'http://www.peernow.site/api/user/logout_info',
      {},
      {
        withCredentials: true,
      },
    );
  } catch (error) {
    console.error('로그아웃 중 에러 발생', error);
  }
}
