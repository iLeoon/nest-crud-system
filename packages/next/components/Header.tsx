'use client';

import React from 'react';
import { MainNav } from '@/components/ui/nav';
import { UserNav } from '@/components/ui/user-nav';
import type { GetUserData } from '@/utils/types';
import { getImage } from '@/utils/api/upload/getImage';
import { useQuery } from '@tanstack/react-query';

export default function Header() {
	const { data } = useQuery<GetUserData>({
		queryKey: ['get-profileData'],
		queryFn: async () => getImage()
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
