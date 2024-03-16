'use client';
import React from 'react';
import { updateSchema } from '@/utils/validation/create-updateFormValidation';
import { type updateSchemaType } from '@/utils/types';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	FormControl,
	Form,
	FormField,
	FormItem,
	FormMessage
} from '../ui/form';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useMutation } from '@tanstack/react-query';
import { createProduct } from '@/utils/api/products/createProduct';
import { DisplayAlert } from '../Alert';

export default function UpdateForm() {
	const form = useForm<updateSchemaType>({
		resolver: zodResolver(updateSchema),
		defaultValues: {
			
		}
	});
	const { mutate, isSuccess, isPending } = useMutation({
		mutationKey: ['update-product'],
		mutationFn: createProduct
	});
	const onSubmit = (values: updateSchemaType) => {
		mutate(values);
		form.reset();
	};
	return (
		<>
			{isSuccess && (
				<DisplayAlert
					message={'Product updated successfully'}
					color="success"
					severity="success"
				/>
			)}
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className=" w-[70%] px-7 py-7"
				>
					<h1>Add product's details:</h1>
					<FormField
						control={form.control}
						name="product_name"
						render={({ field }) => (
							<FormItem>
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
						name="unit_price"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										className="mx-5 my-5 placeholder:text-slate-350"
										placeholder="Price"
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
						name="units_in_stock"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										className="mx-5 my-5 placeholder:text-slate-350"
										placeholder="In Stock"
										{...field}
										value={field.value ?? ''}
									/>
								</FormControl>
								<FormMessage className="mx-5 my-5" />
							</FormItem>
						)}
					/>
					<Button disabled={isPending} type="submit" className="mx-5 my-5">
						Submit
					</Button>
				</form>
			</Form>
		</>
	);
}
