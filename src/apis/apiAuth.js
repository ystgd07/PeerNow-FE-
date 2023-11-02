import axios from 'axios';
const JWT_EXPIRY_TIME = 24 * 3600 * 1000;

export async function registApi({ id, pw, name }) {
  const res = await axios.post('/user/join', {
    id,
    pw: pw,
    name: name,
  });

  return res.data;
}

export async function loginApi(form) {
  console.log('form', form);

  const res = await axios
    .post(`/api/user/login`, form, {
      withCredentials: true,
    })
    .then((res) => {
      const { accessToken } = res.data.token.accessToken;

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

  return res.data;
}
