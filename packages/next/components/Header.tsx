'use client';

import React from 'react';
import { MainNav } from '@/components/ui/nav';
import { UserNav } from '@/components/ui/user-nav';

export default function Header() {
	return (
		<div className="">
			<div className="border-b">
				<div className="flex h-16 items-center px-4">
					<MainNav className="mx-6" />
					<div className="ml-auto flex items-center space-x-4">
						<UserNav />
					</div>
				</div>
			</div>
		</div>
	);
}
