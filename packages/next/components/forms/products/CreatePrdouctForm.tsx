'use client';
import React from 'react';
import { CreateProductSchema } from '@/utils/validation/FormSchemas';
import type { CreateProductSchemaType } from '@/utils/types';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	FormControl,
	Form,
	FormField,
	FormItem,
	FormMessage,
	FormLabel
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Icons } from '@/components/ui/icons';
import { useMutation } from '@tanstack/react-query';
import { createProduct } from '@/utils/api/products/createProduct';
import { DisplayAlert } from '../../Alert';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '@/components/ui/card';

export default function CreateProductForm() {
	const form = useForm<CreateProductSchemaType>({
		resolver: zodResolver(CreateProductSchema)
	});
	const { mutate, isSuccess, isPending } = useMutation({
		mutationKey: ['create-product'],
		mutationFn: createProduct
	});
	const onSubmit = (values: CreateProductSchemaType) => {
		mutate(values);
		form.reset();
	};
	return (
		<Card className="m-5">
			{isSuccess && (
				<DisplayAlert
					message={'Product created successfully'}
					color="success"
					severity="success"
				/>
			)}
			<CardHeader>
				<CardTitle>Create Product</CardTitle>
				<CardDescription>
					Fill the inputs to create a new product.
				</CardDescription>
			</CardHeader>
			<CardContent className="">
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
											placeholder="Tomato"
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
									<FormLabel className="mx-5">Product Price</FormLabel>
									<FormControl>
										<Input
											className="mx-5 my-5 placeholder:text-slate-350"
											placeholder="3"
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
									<FormLabel className="mx-5">Units In Stock</FormLabel>
									<FormControl>
										<Input
											className="mx-5 my-5 placeholder:text-slate-350"
											placeholder="8"
											{...field}
											value={field.value ?? ''}
										/>
									</FormControl>
									<FormMessage className="mx-5 my-5" />
								</FormItem>
							)}
						/>
						<Button disabled={isPending} type="submit" className="mx-5 my-5">
							{isPending && (
								<Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
							)}
							Submit
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
}
