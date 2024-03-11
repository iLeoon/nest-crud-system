'use client';
import React from 'react';
import { createSchema } from '@/utils/validation/create-updateFormValidation';
import { type createSchemaType } from '@/utils/types';
import z from 'zod';
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

export default function CreateForm() {
	const form = useForm<createSchemaType>({
		resolver: zodResolver(createSchema)
	});
	const { mutate, isSuccess } = useMutation({
		mutationKey: ['create-product'],
		mutationFn: createProduct
	});
	const onSubmit = (values: createSchemaType) => {
		mutate(values);
	};
	return (
		<>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
					<FormField
						control={form.control}
						name="product_name"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										placeholder="Product Name"
										{...field}
										value={field.value ?? ''}
									/>
								</FormControl>
								<FormMessage />
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
										placeholder="Price"
										{...field}
										type="string"
										value={field.value ?? ''}
									/>
								</FormControl>
								<FormMessage />
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
										placeholder="In Stock"
										{...field}
										value={field.value ?? ''}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit">Submit</Button>
				</form>
			</Form>
		</>
	);
}
