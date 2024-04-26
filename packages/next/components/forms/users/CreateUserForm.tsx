'use client';

import React from 'react';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '@/components/ui/card';
import {
	FormControl,
	Form,
	FormField,
	FormItem,
	FormMessage,
	FormLabel
} from '@/components/ui/form';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateUserSchemaType } from '@/utils/types';
import { CreateUserFormSchema } from '@/utils/validation/FormSchemas';
import { createUser } from '@/utils/api/users/createUser';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

export default function CreateUserForm() {
	const form = useForm<CreateUserSchemaType>({
		resolver: zodResolver(CreateUserFormSchema)
	});
	const { mutate, isPending } = useMutation({
		mutationKey: ['create-user'],
		mutationFn: createUser,
		onSuccess() {
			toast.success('User created successfully.', { position: 'top-center' });
		}
	});
	const onSubmit = (values: CreateUserSchemaType) => {
		mutate(values);
		form.reset();
	};
	return (
		<Card className="w-[200%]">
			<CardHeader>
				<CardTitle>Create User</CardTitle>
				<CardDescription>
					The user you will create will be authorized to access the dashboard
					with the credentails you provide.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-8 w-2/4"
					>
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="mx-5">Name</FormLabel>
									<FormControl>
										<Input
											className="mx-5 my-5 placeholder:text-slate-350"
											placeholder="Name"
											{...field}
											value={field.value ?? ''}
										/>
									</FormControl>
									<FormMessage className="mx-5 my-5" />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="mx-5">Email</FormLabel>
									<FormControl>
										<Input
											className="mx-5 my-5 placeholder:text-slate-350"
											placeholder="Email"
											{...field}
											type="string"
											value={field.value ?? ''}
										/>
									</FormControl>
									<FormMessage className="mx-5 my-5" />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="mx-5">Password</FormLabel>
									<FormControl>
										<Input
											className="mx-5 my-5 placeholder:text-slate-350"
											type="password"
											placeholder="Password"
											{...field}
											value={field.value ?? ''}
										/>
									</FormControl>
									<FormMessage className="mx-5 my-5" />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="roles"
							render={({ field }) => (
								<FormItem className="w-48">
									<FormLabel className="mx-5">Role</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl className="mx-5 my-5 placeholder:text-slate-350">
											<SelectTrigger>
												<SelectValue placeholder="Select a role" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectItem value="user">user</SelectItem>
											<SelectItem value="admin">admin</SelectItem>
										</SelectContent>
									</Select>
									<FormMessage className="mx-5 my-5" />
								</FormItem>
							)}
						/>
						<Button disabled={isPending} type="submit" className="mx-5 my-5">
							{isPending && (
								<Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
							)}
							Create User
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
}
