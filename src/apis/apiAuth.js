import axios from 'axios';

const JWT_EXPIRY_TIME = 24 * 3600 * 1000;

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
