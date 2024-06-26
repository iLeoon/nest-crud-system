'use client';

import { X } from 'lucide-react';
import { Table } from '@tanstack/react-table';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DataTableViewOptions } from './data-table-view-options';

interface DataTableToolbarProps<TData> {
	table: Table<TData>;
}

export function DataTableToolbar<TData>({
	table
}: DataTableToolbarProps<TData>) {
	return (
		<div className="flex items-center justify-between">
			<div className="flex flex-1 items-center space-x-2"> </div>
			<DataTableViewOptions table={table} />
		</div>
	);
}
