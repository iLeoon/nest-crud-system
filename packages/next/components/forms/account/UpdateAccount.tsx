<<<<<<< HEAD
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
import { Icons } from '@/components/ui/icons';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

export function AccountForm() {
	const form = useForm<AccountSchemaType>({
		resolver: zodResolver(AccountFormSchema),
		defaultValues: {
			username: '',
			image: undefined
		}
	});
	const { mutate, isPending, data } = useMutation({
		mutationKey: ['update-profile'],
		mutationFn: updateUser
	});
	function onSubmit(values: AccountSchemaType) {
		mutate(values, {
			onSuccess(data) {
				if (data.message === 'failed') {
					form.setError('image', { message: data.error });
				}
			}
		});
		form.reset();
	}

	return (
		<Form {...form}>
			{data?.message === 'success' && (
				<Alert variant="default" className="absolute top-0 left-0 w-[50%]">
					<AlertCircle className="h-4 w-4" />
					<AlertTitle>Error</AlertTitle>
					<AlertDescription>
						Your session has expired. Please log in again.
					</AlertDescription>
				</Alert>
			)}
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
								This is the name that will be displayed on your profile.
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
									type="file"
									onChange={(e) =>
										field.onChange(e.target.files ? e.target.files[0] : null)
									}
								/>
							</FormControl>
							<FormDescription>
								This is the image that will be displayed on your profile.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type="submit" disabled={!form.formState.isDirty || isPending}>
					{isPending && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
					Update account
				</Button>
			</form>
		</Form>
	);
}
=======
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
import { Icons } from '@/components/ui/icons';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

export function AccountForm() {
	const form = useForm<AccountSchemaType>({
		resolver: zodResolver(AccountFormSchema),
		defaultValues: {
			username: '',
			image: undefined
		}
	});
	const { mutate, isPending, data } = useMutation({
		mutationKey: ['update-profile'],
		mutationFn: updateUser
	});
	function onSubmit(values: AccountSchemaType) {
		mutate(values, {
			onSuccess(data) {
				if (data.message === 'failed') {
					form.setError('image', { message: data.error });
				}
			}
		});
		form.reset();
	}

	return (
		<Form {...form}>
			{data?.message === 'success' && (
				<Alert variant="default" className="absolute top-0 left-0 w-[50%]">
					<AlertCircle className="h-4 w-4" />
					<AlertTitle>Error</AlertTitle>
					<AlertDescription>
						Your session has expired. Please log in again.
					</AlertDescription>
				</Alert>
			)}
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
								This is the name that will be displayed on your profile.
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
									type="file"
									onChange={(e) =>
										field.onChange(e.target.files ? e.target.files[0] : null)
									}
								/>
							</FormControl>
							<FormDescription>
								This is the image that will be displayed on your profile.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type="submit" disabled={!form.formState.isDirty || isPending}>
					{isPending && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
					Update account
				</Button>
			</form>
		</Form>
	);
}
>>>>>>> 06b9776d45a735f3386357a635fe962afdd858e8
