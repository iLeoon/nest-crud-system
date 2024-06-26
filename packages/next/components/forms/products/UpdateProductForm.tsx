'use client';
import React, { useEffect } from 'react';
import { UpdateProductSchema } from '@/utils/validation/FormSchemas';
import { type UpdateProductSchemaType } from '@/utils/types';
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
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '@/components/ui/card';
import { updateProduct } from '@/utils/api/products/updateProduct';
import { toast } from 'sonner';

type UpdateFormProps = {
	id: number;
	data?: UpdateProductSchemaType;
};

export default function UpdateProductForm({ id, data }: UpdateFormProps) {
	const form = useForm<UpdateProductSchemaType>({
		mode: 'onChange',
		resolver: zodResolver(UpdateProductSchema),
		defaultValues: {
			product_name: data?.product_name,
			unit_price: data?.unit_price,
			units_in_stock: data?.units_in_stock
		}
	});

	const { mutate, isSuccess, isPending } = useMutation({
		mutationKey: ['update-product'],
		mutationFn: updateProduct,
		onSuccess() {
			toast.success('Product updated successfully.', {
				position: 'top-center'
			});
		}
	});
	const onSubmit = (values: UpdateProductSchemaType) => {
		mutate({ values, id });
	};
	useEffect(() => {
		if (form.formState.isSubmitSuccessful) {
			form.reset(form.getValues());
		}
	}, [form.formState.isSubmitSuccessful]);
	return (
		<Card className="m-5">
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
