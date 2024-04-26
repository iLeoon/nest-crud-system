import React from 'react';
import { DataTable } from '@/components/ui/users-table/data-table';
import { columns } from '@/components/ui/users-table/columns';

export default async function Users() {
	return (
		<>
			<div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
				<div className="flex items-center justify-between space-y-2">
					<div>
						<h2 className="text-2xl font-bold tracking-tight">
							List of the authorized users.
						</h2>
					</div>
				</div>
				<DataTable columns={columns} />
			</div>
		</>
	);
}
