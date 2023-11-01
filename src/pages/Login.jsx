import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../ui/Form';

export default function Login() {
  return (
    <Form
      title={'로그인'}
      label1={'ID'}
      label2={'PASSWORD'}
      btnName={'로그인'}
    />
  );
}
