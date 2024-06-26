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
import { dataTagSymbol, useMutation } from '@tanstack/react-query';
import { updateAccount } from '@/utils/api/users/updateAccount';
import { Icons } from '@/components/ui/icons';
import { toast } from 'sonner';

export default function UpdateAccountForm() {
	const form = useForm<AccountSchemaType>({
		resolver: zodResolver(AccountFormSchema),
		defaultValues: {
			username: '',
			image: undefined
		}
	});
	const { mutate, isPending, isSuccess } = useMutation({
		mutationKey: ['update-profile'],
		mutationFn: updateAccount
	});
	function onSubmit(values: AccountSchemaType) {
		mutate(values, {
			onSuccess(data) {
				if (data.message === 'failed') {
					return form.setError('image', { message: data.error });
				}
				toast.success('Your profile has been updated successfully.', {
					position: 'top-center'
				});
			}
		});
		form.reset();
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
