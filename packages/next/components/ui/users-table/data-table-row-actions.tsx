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
import type { User } from '@/utils/types';
import { useQueryClient } from '@tanstack/react-query';
import { deleteUser } from '@/utils/api/users/deleteUser';

type DataTableRowActionsProps = {
	data: User;
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
						specified user.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction
						type="button"
						onClick={async () => {
							await deleteUser(data._id);
							await query.fetchQuery({
								queryKey: ['get-users']
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
