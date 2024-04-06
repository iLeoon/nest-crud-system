import { Separator } from '@/components/ui/separator';

export default function AccountPage() {
	return (
		<div className="space-y-6">
			<div>
				<h3 className="text-lg font-medium">Account</h3>
				<p className="text-sm text-muted-foreground">
					Update your account settings.
				</p>
			</div>
			<Separator />
		</div>
	);
}
