/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable react/jsx-no-useless-fragment */

'use client';
import React, { useState, ChangeEvent } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Stack, Pagination } from '@mui/material';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';
import { getProducts } from '@/utils/api/products/getProducts';
import { type productsResponse } from '@/utils/types';
import CreateButton from './Buttons/CreateButton';
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
import { TableSkeleton } from './TableSkeleton';
import { Trash, Pencil } from 'lucide-react';
import { cn } from '@/lib/helper';
import { buttonVariants } from './ui/button';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14
	}
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: theme.palette.action.hover
	},

	'&:last-child td, &:last-child th': {
		border: 0
	}
}));

export default function ProductsTable() {
	const queryClient = useQueryClient();
	const [page, setPage] = useState<number>(1);
	const { data, isLoading, refetch } = useQuery<productsResponse>({
		queryKey: ['products', page],
		queryFn: async () => getProducts(page),
		placeholderData: () => queryClient.getQueryData(['products', page - 1])
	});
	const handleChange = async (
		event: ChangeEvent<unknown>,
		currentPage: number
	) => {
		setPage(currentPage);
	};
	return (
		<>
			{isLoading ? (
				<TableSkeleton />
			) : (
				<div>
					<Link href="/products/create">
						<CreateButton />
					</Link>

					<TableContainer component={Paper}>
						<Table sx={{ minWidth: 700 }} aria-label="customized table">
							<TableHead>
								<TableRow>
									<StyledTableCell align="center">#</StyledTableCell>
									<StyledTableCell align="right">Product Name</StyledTableCell>
									<StyledTableCell align="right">Unit Price($)</StyledTableCell>
									<StyledTableCell align="right">Stock</StyledTableCell>
									<StyledTableCell align="right">Actions</StyledTableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{data?.items.map((product) => (
									<StyledTableRow key={product.product_id}>
										<StyledTableCell align="center">
											{data.items.indexOf(product)}
										</StyledTableCell>
										<StyledTableCell align="right">
											{product.product_name}
										</StyledTableCell>
										<StyledTableCell align="right">
											{product.unit_price}
										</StyledTableCell>
										<StyledTableCell align="right">
											{product.units_in_stock}
										</StyledTableCell>
										<StyledTableCell align="right" className="flex">
											<AlertDialog>
												<AlertDialogTrigger
													className={cn(
														buttonVariants({ variant: 'ghost', size: 'icon' }),
														'rounded-full hover:bg-red-300'
													)}
												>
													<Trash color="red" className="w-5 h-5" />
												</AlertDialogTrigger>
												<AlertDialogContent>
													<AlertDialogHeader>
														<AlertDialogTitle>
															Confirm Deletion
														</AlertDialogTitle>
														<AlertDialogDescription>
															This action cannot be undone. This will
															permanently delete the specified product.
														</AlertDialogDescription>
													</AlertDialogHeader>
													<AlertDialogFooter>
														<AlertDialogCancel>Cancel</AlertDialogCancel>
														<AlertDialogAction
															type="button"
															onClick={async () => {
																await deleteProduct(product.product_id);
																refetch();
																if (data.meta.itemCount === 1) {
																	setPage(page - 1);
																}
															}}
														>
															Continue
														</AlertDialogAction>
													</AlertDialogFooter>
												</AlertDialogContent>
											</AlertDialog>
											<Link
												href={`products/update/${product.product_id}`}
												className={cn(
													buttonVariants({
														variant: 'ghost',
														size: 'icon'
													}),
													'rounded-full hover:bg-blue-300'
												)}
											>
												<Pencil color="blue" className="w-5 h-5" />
											</Link>
										</StyledTableCell>
									</StyledTableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
					<Stack spacing={2} sx={{ margin: '10px' }}>
						<Pagination
							count={data?.meta.totalPages}
							color="primary"
							variant="outlined"
							page={page}
							onChange={handleChange}
						/>
					</Stack>
				</div>
			)}
		</>
	);
}
