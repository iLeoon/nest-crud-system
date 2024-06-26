'use client';
import React from 'react';
import { GripHorizontal } from 'lucide-react';
import {
	AlertDialog,
	AlertDialogTrigger,
	AlertDialogContent,
	AlertDialogHeader,
	AlertDialogFooter,
	AlertDialogCancel,
	AlertDialogDescription,
	AlertDialogAction,
	AlertDialogTitle
} from '@/components/ui/alert-dialog';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { deleteProduct } from '@/utils/api/products/deleteProduct';
import { Product } from '@/utils/types';
import { useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';

type DataTableRowActionsProps = {
	data: Product;
};
export function DataTableRowActions({ data }: DataTableRowActionsProps) {
	const query = useQueryClient();
	return (
		<AlertDialog>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button
						variant="ghost"
						className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
					>
						<GripHorizontal className="h-4 w-4" />
						<span className="sr-only">Open menu</span>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end" className="w-[160px]">
					<Link href={`products/update/${data.product_id}`}>
						<DropdownMenuItem>Edit</DropdownMenuItem>
					</Link>

					<AlertDialogTrigger className=" w-full">
						<DropdownMenuItem>Delete</DropdownMenuItem>
					</AlertDialogTrigger>
				</DropdownMenuContent>
			</DropdownMenu>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Confirm Deletion</AlertDialogTitle>
					<AlertDialogDescription>
						This action cannot be undone. This will permanently delete the
						specified product.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction
						type="button"
						onClick={async () => {
							await deleteProduct(data.product_id);
							await query.fetchQuery({
								queryKey: ['get-products']
							});
						}}
					>
						Continue
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
