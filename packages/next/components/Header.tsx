'use client';

import React from 'react';
import { MainNav } from '@/components/ui/nav';
import { UserNav } from '@/components/ui/user-nav';
import type { AuthUserType } from '@/utils/types';
import { getAuthUser } from '@/utils/api/users/getAuthUser';
import { useQuery } from '@tanstack/react-query';

export default function Header() {
	const { data } = useQuery<AuthUserType>({
		queryKey: ['get-userData'],
		queryFn: async () => getAuthUser(),
		refetchOnWindowFocus: false
	});
	console.log(data);
	return (
		<div className="">
			<div className="border-b">
				<div className="flex h-16 items-center px-4">
					<MainNav className="mx-6" />
					<div className="ml-auto flex items-center space-x-4">
						<UserNav
							email={data?.email}
							image={data?.image}
							name={data?.name}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
