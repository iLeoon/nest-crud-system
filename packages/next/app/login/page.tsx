import { Metadata } from 'next';
import { UserAuthForm } from '@/components/forms/authentication/LoginForm';

export const metadata: Metadata = {
	title: 'Authentication',
	description: 'Authentication forms built using the components.'
};

export default function AuthenticationPage() {
	return (
		<>
			<div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
				<div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
					<div className="absolute inset-0 bg-zinc-900" />
				</div>
				<div className="lg:p-8">
					<div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
						<div className="flex flex-col space-y-2 text-center">
							<h1 className="text-2xl font-semibold tracking-tight">Log In</h1>
							<p className="text-sm text-muted-foreground">
								Enter your email and password below to Sign in
							</p>
						</div>
						<UserAuthForm />
					</div>
				</div>
			</div>
		</>
	);
}
