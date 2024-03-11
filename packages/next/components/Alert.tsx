import React, { useState } from 'react';
import { Alert, AlertProps } from '@mui/material';
import { attributes } from '@/utils/types';
import CheckIcon from '@mui/icons-material/CheckCircleOutlined';

export function DisplayAlert(attributes: attributes) {
	const [show, setShow] = useState(true);

	return (
		<div className="absolute left-[50%] p-6">
			{show && (
				<Alert
					severity={attributes.severity}
					color={attributes.color}
					icon={<CheckIcon fontSize="inherit" />}
					onClose={() => {
						setShow(false);
					}}
					className="w-[130%] relative left-[-50%]"
				>
					{attributes.message}
				</Alert>
			)}
		</div>
	);
}
