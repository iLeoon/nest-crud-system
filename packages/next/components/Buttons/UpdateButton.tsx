import React from 'react';
import { IconButton } from '@mui/material';
import CreateTwoToneIcon from '@mui/icons-material/CreateTwoTone';

export function UpdateButton() {
	return (
		<IconButton aria-label="update" size="small" color="primary">
			<CreateTwoToneIcon />
		</IconButton>
	);
}
