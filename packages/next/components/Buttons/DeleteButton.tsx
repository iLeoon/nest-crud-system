import React from 'react';
import { IconButton } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
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
import { deleteProduct } from '@/utils/api/products/deleteProduct';
import { productsResponse } from '@/utils/types';

export function DeleteButton({
	id,
	refetch,
	data,
	setPage
}: {
	id: number;
	refetch: any
	data: productsResponse;
	setPage: React.Dispatch<React.SetStateAction<number>>;
}) {
	return (
		<AlertDialog>
			<AlertDialogTrigger>
				<IconButton aria-label="delete" size="small" color="error">
					<DeleteOutlineIcon />
				</IconButton>
			</AlertDialogTrigger>
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
							await deleteProduct(id);
							refetch();
							if (data.meta.itemCount === 1) {
								setPage(data.meta.currentPage - 1);
							}
						}}
					>
						Continue
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
