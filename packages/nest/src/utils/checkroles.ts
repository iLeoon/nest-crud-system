export function checkRoles(
	userRole: string,
	authenticatedUserRole: any,
): boolean {
	const role = userRole;
	if (authenticatedUserRole === role) {
		return true;
	}
	return false;
}
