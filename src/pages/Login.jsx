import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../ui/Form';
import { useLoginAndCreateAccount } from '../store/store';

export default function Login() {
  const { ...loginSlice } = useLoginAndCreateAccount((state) => state);
  const testFunc = () => {
    console.log('testFunc');
  };

  return (
    <Form
      title={'로그인'}
      label1={'아이디'}
      label2={'패스워드'}
      btnName={'로그인'}
      checkValid={loginSlice.isValidLogin}
    />
  );
}
