'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios, { AxiosError } from 'axios';
import { Alert } from '@mui/material';
import { useRouter } from 'next/navigation';
import {
	InputContainer,
	InputField,
	InputLabel,
	Aligning
} from '@/styles/pages/loginpage';
import { Button } from '@/styles/Buttons/loginbutton';
import { credentialsUser } from '@/utils/types';
import { loginAuth } from '@/utils/api/auth/auth';

export default function LoginForm() {
	const router = useRouter();
	const [error, sertError] = useState('');
	const [show, setShow] = useState<boolean>(false);
	const { register, handleSubmit } = useForm<credentialsUser>();
	const onSumbit = (data: credentialsUser) => {
		loginAuth(data)
			.then((res) => {
				if (res.status === 201) {
					router.push('/products');
				}
			})
			.catch((e: AxiosError | Error) => {
				if (axios.isAxiosError(e)) {
					sertError(e.response?.data.message);
					setShow(true);
				} else {
					sertError('Email or Password is incorrect.');
					setShow(true);
					throw new Error('Unauthorized user');
				}
			});
	};
	return (
		<Aligning>
			<form style={{ width: '500px' }} onSubmit={handleSubmit(onSumbit)}>
				{show && (
					<Alert
						variant="outlined"
						severity="error"
						onClose={() => {
							setShow(false);
						}}
					>
						{error}
					</Alert>
				)}

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
