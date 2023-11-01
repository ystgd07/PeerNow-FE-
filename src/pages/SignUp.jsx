import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../ui/Form';

export default function SignUp() {
  return (
    <Form
      title={'회원가입'}
      label1={'ID'}
      label2={'PASSWORD'}
      label3={'PASSWORDCHECK'}
      btnName={'계정생성'}
      link={'/signup'}
    />
  );
}
