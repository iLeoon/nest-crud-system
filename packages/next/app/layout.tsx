import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ReactQueryProvider } from '@/utils/providers/ReactQueryProvider';
const inter = Inter({ subsets: ['latin'] });
import { Toaster } from 'sonner';

export const metadata: Metadata = {
	title: 'Products',
	description: 'Generated by create next app'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ReactQueryProvider>{children}</ReactQueryProvider>
				<Toaster richColors/>
			</body>
		</html>
	);
}
