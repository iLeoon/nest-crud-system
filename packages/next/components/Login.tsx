'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  InputContainer,
  InputField,
  InputLabel,
  Aligning,
} from '@/styles/pages/loginpage';
import { Button } from '@/styles/Buttons/loginbutton';
import { credentialsUser } from '@/types';
import { loginAuth } from '@/api/auth';
import axios, { AxiosError } from 'axios';
import { Alert } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const [error, sertError] = useState('');
  const { register, handleSubmit } = useForm<credentialsUser>();
  const onSumbit = async (data: credentialsUser) => {
    loginAuth(data)
      .then((res) => {
        if (res.status === 201) {
          router.push('/')
        }
      })
      .catch((e: AxiosError | Error) => {
        if (axios.isAxiosError(e)) {
          sertError(e.response?.data.message);
          console.log(e.response?.data.message);
        } else {
          sertError('Email or Password is incorrect.');
          throw new Error('Unauthorized user');
        }
      });
  };
  return (
    <Aligning>
      <form style={{ width: '500px' }} onSubmit={handleSubmit(onSumbit)}>
        <Alert variant="outlined" severity="error" onClose={() => {}}>
          Something went wrong
        </Alert>
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
    </Aligning>
  );
}
