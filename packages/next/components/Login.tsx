'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import {
  InputContainer,
  InputField,
  InputLabel,
} from '@/styles/pages/loginpage';
import { Button } from '@/styles/Buttons/loginbutton';
import { User } from '@/types';
import { loginAuth } from '@/api/auth';

export default function Login() {
  const { register, handleSubmit } = useForm<User>();
  const onSumbit = async (data: User) => {
    await loginAuth(data);
  };
  return (
    <form style={{ width: '500px' }} onSubmit={handleSubmit(onSumbit)}>
      <InputContainer>
        <InputLabel htmlFor="email">Email</InputLabel>
        <InputField type="email" id="email" {...register('email')} />
      </InputContainer>
      <InputContainer>
        <InputLabel htmlFor="password">password</InputLabel>
        <InputField type="password" id="password" {...register('password')} />
      </InputContainer>
      <Button type="submit">Log In</Button>
    </form>
  );
}
