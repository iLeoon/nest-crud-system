'use client';

import React from 'react';
import {
	FormControl,
	Form,
	FormField,
	FormItem,
	FormMessage,
	FormLabel,
	FormDescription
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { AccountSchemaType } from '@/utils/types';
import { AccountFormSchema } from '@/utils/validation/FormSchemas';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { updateUser } from '@/utils/api/users/updateUser';

export function AccountForm() {
	const form = useForm<AccountSchemaType>({
		resolver: zodResolver(AccountFormSchema),
		defaultValues: {
			username: '',
			image: new File([], '')
		}
	});
	const { mutate, data } = useMutation({
		mutationKey: ['update-profile'],
		mutationFn: updateUser
	});
	function onSubmit(values: AccountSchemaType) {
		console.log(data)
		if (data?.message === 'failed') {
			form.setError('image', { message: data?.error });
		}
		mutate(values);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Profile Name</FormLabel>
							<FormControl>
								<Input placeholder="Name" {...field} type="text" />
							</FormControl>
							<FormDescription>
								This is the name that will be displayed on your profile
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="image"
					render={({ field }) => (
						<FormItem className="flex flex-col">
							<FormLabel>Profile Image</FormLabel>
							<FormControl>
								<Input
									accept=".jpg, .jpeg, .png"
									type="file"
									onChange={(e) =>
										field.onChange(e.target.files ? e.target.files[0] : null)
									}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type="submit">Update account</Button>
			</form>
		</Form>
	);
}
