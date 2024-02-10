'use client';

import * as React from 'react';
import {
  InputContainer,
  InputField,
  LoginForm,
  InputLabel,
  Button,
} from '@/styles/form/loginform';

export default function Login() {
  return (
    <LoginForm>
      <InputContainer>
        <InputLabel htmlFor="email">Email</InputLabel>
        <InputField type="email" id="email" />
      </InputContainer>
      <InputContainer>
        <InputLabel htmlFor="password">password</InputLabel>
        <InputField type="password" id="password" />
      </InputContainer>
      <Button type="submit">Log In</Button>
    </LoginForm>
  );
}
