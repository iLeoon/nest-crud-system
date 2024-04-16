import React from 'react';
import { Skeleton, Box } from '@mui/material';

export function TableSkeleton() {
	return (
		<Box sx={{ marginTop: '40px' }}>
			<Skeleton variant="rectangular" height={50} />
			<Skeleton variant="text" height={50} />
			<Skeleton variant="text" height={50} />
			<Skeleton variant="text" height={50} />
			<Skeleton variant="text" height={50} />
			<Skeleton variant="text" height={50} />
			<Skeleton variant="text" width={400} height={50} />
		</Box>
	);
}
