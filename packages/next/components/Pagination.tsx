import React, { ChangeEvent, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { paginationOps } from '@/utils/types';

export default function Paginate({
  paginationOptions,
}: {
  paginationOptions: paginationOps;
}) {
  const [page, setPage] = useState<number>(1);
  const handleChange = async (
    event: ChangeEvent<unknown>,
    currentPage: number,
  ) => {
    setPage(currentPage);
  };
  return (
    <Stack spacing={2}>
      <Pagination
        count={paginationOptions?.totalPages}
        color="primary"
        variant="outlined"
        page={page}
        onChange={handleChange}
      />
    </Stack>
  );
}
