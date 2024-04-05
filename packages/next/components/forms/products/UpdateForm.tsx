'use client';
import React, { useEffect, useState } from 'react';
import { updateSchema } from '@/utils/validation/FormSchemas';
import { type updateSchemaType } from '@/utils/types';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	FormControl,
	Form,
	FormField,
	FormItem,
	FormMessage,
	FormLabel
} from '../../ui/form';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { useMutation } from '@tanstack/react-query';
import { DisplayAlert } from '../../Alert';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '@/components/ui/card';
import { updateProduct } from '@/utils/api/products/updateProduct';

type Props = {
	id: number;
	data?: updateSchemaType;
};

export default function UpdateForm({ id, data }: Props) {
	const form = useForm<updateSchemaType>({
		mode: 'onChange',
		resolver: zodResolver(updateSchema),
		defaultValues: {
			product_name: data?.product_name,
			unit_price: data?.unit_price,
			units_in_stock: data?.units_in_stock
		}
	});

	const { mutate, isSuccess } = useMutation({
		mutationKey: ['update-product'],
		mutationFn: updateProduct
	});
	const onSubmit = (values: updateSchemaType) => {
		mutate({ values, id });
	};
	useEffect(() => {
		if (form.formState.isSubmitSuccessful) {
			form.reset(form.getValues());
		}
	}, [form.formState.isSubmitSuccessful]);
	return (
		<Card className="m-5">
			{isSuccess && (
				<DisplayAlert
					message={'Product updated successfully'}
					color="success"
					severity="success"
				/>
			)}
			<CardHeader>
				<CardTitle>Update Product</CardTitle>
				<CardDescription>Update the following product</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-8 w-2/4"
					>
						<FormField
							control={form.control}
							name="product_name"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="mx-5">Product Name</FormLabel>
									<FormControl>
										<Input
											className="mx-5 my-5 placeholder:text-slate-350"
											{...field}
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
									<FormLabel className="mx-5">Product Price</FormLabel>
									<FormControl>
										<Input
											className="mx-5 my-5 placeholder:text-slate-350"
											{...field}
											type="string"
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
									<FormLabel className="mx-5">Units In Stock</FormLabel>
									<FormControl>
										<Input
											className="mx-5 my-5 placeholder:text-slate-350"
											{...field}
											type="string"
										/>
									</FormControl>
									<FormMessage className="mx-5 my-5" />
								</FormItem>
							)}
						/>
						<Button
							disabled={!form.formState.isDirty}
							type="submit"
							className="mx-5 my-5"
						>
							Submit
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
}
