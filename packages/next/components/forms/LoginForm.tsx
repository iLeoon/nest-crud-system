'use client';

import * as React from 'react';

import { cn } from '@/lib/helper';
import { Icons } from '@/components/ui/icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
	FormControl,
	Form,
	FormField,
	FormItem,
	FormMessage,
	FormLabel
} from '@/components/ui/form';

import { useForm } from 'react-hook-form';
import { LoginSchema } from '@/utils/validation/FormSchemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchemaType } from '@/utils/types';
import { loginAuth } from '@/utils/api/auth/auth';
import { useRouter } from 'next/navigation';

export function UserAuthForm() {
	const router = useRouter();
	const form = useForm<loginSchemaType>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: '',
			password: ''
		}
	});
	const [isLoading, setIsLoading] = React.useState<boolean>(false);

	const onSubmit = async (values: loginSchemaType) => {
		const res = await loginAuth(values);
		console.log(res.error);
		if (res.message === 'faild') {
			return form.setError('email', { message: res.error });
		}
		router.push('/products');
		setIsLoading(true);
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className={cn('grid gap-6')}>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input placeholder="email" {...field} type="email" />
							</FormControl>
							<FormMessage className="" />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input {...field} type="password" placeholder="password" />
							</FormControl>
							<FormMessage className="" />
						</FormItem>
					)}
				/>
				<Button disabled={isLoading} className="bg-zinc-900">
					{isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
					Sign In
				</Button>
			</form>
		</Form>
	);
}
