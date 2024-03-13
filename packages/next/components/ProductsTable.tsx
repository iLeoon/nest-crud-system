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
import { UpdateButton } from './Buttons/UpdateButton';
import { DeleteButton } from './Buttons/DeleteButton';
import { TableSkeleton } from './TableSkeleton';

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
	const { data, isLoading } = useQuery<productsResponse>({
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
											{product.product_id}
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
										<StyledTableCell align="right">
											<Link href="products/update">
												<UpdateButton />
											</Link>
											<DeleteButton />
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
