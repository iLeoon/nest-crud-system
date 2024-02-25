/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/naming-convention */

'use client';

import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useQuery } from '@tanstack/react-query';
import { getProduct } from '@/utils/api/products/getProducts';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },

  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function ProductsTable() {
  const { data } = useQuery({
    queryKey: ['products'],
    queryFn: getProduct,
  });
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>#</StyledTableCell>
            <StyledTableCell align="right">Product Name</StyledTableCell>
            <StyledTableCell align="right">Unit Price(g)</StyledTableCell>
            <StyledTableCell align="right">Stock(g)</StyledTableCell>
            <StyledTableCell align="right">Actions(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((product) => (
            <StyledTableRow key={product.product_id}>
              <StyledTableCell align="right">
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
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
