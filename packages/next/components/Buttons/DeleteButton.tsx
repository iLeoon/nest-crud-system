import React from 'react';
import { IconButton } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export function DeleteButton() {
	return (
		<IconButton aria-label="delete" size="small" color="error">
			<DeleteOutlineIcon />
		</IconButton>
	);
}
