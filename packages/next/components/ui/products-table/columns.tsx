'use client';

import { ColumnDef } from '@tanstack/react-table';
import { DataTableColumnHeader } from './data-table-column-header';
import { DataTableRowActions } from './data-table-row-actions';
import { Product } from '@/utils/types';

export const getColumns = (isAdmin: boolean): ColumnDef<Product>[] => [
	{
		accessorKey: 'product_id',
		header: ({ column }) => <DataTableColumnHeader column={column} title="#" />,
		cell: ({ row }) => <div className="w-[80px]">{row.index + 1}</div>,
		enableSorting: false,
		enableHiding: false
	},
	{
		accessorKey: 'product_name',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Product Name" />
		),
		cell: ({ row }) => {
			return (
				<div className="flex space-x-2">
					<span className="max-w-[500px] truncate font-medium">
						{row.getValue('product_name')}
					</span>
				</div>
			);
		}
	},
	{
		accessorKey: 'unit_price',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Unit Price" />
		),
		cell: ({ row }) => {
			return (
				<div className="flex space-x-2">
					<span className="max-w-[500px] truncate font-medium">
						{row.getValue('unit_price')}$
					</span>
				</div>
			);
		}
	},
	{
		accessorKey: 'units_in_stock',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Units In Stock" />
		),
		cell: ({ row }) => {
			return (
				<div className="flex space-x-2">
					<span className="max-w-[500px] truncate font-medium">
						{row.getValue('units_in_stock')}
					</span>
				</div>
			);
		}
	},
	...(isAdmin
		? [
				{
					id: 'actions',
					cell: ({ row }: { row: { original: Product } }) => (
						<DataTableRowActions data={row.original} />
					)
				} as ColumnDef<Product>
			]
		: [])
];
