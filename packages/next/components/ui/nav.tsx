import Link from 'next/link';

import { cn } from '@/lib/helper';

export function MainNav({
	className,
	...props
}: React.HTMLAttributes<HTMLElement>) {
	return (
		<nav
			className={cn('flex items-center space-x-4 lg:space-x-6', className)}
			{...props}
		>
			<Link
				href="/products"
				className="text-sm font-medium transition-colors hover:text-primary"
			>
				Overview
			</Link>
			<Link
				href="/products"
				className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
			>
				Customers
			</Link>
			<Link
				href="/products"
				className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
			>
				Products
			</Link>
		</nav>
	);
}
