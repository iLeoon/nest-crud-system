export function checkRoles(
	userRole: string[],
	authenticatedUserRole: any,
): boolean {
	const role = userRole[0];
	if (authenticatedUserRole === role) {
		return true;
	}
	return false;
}
