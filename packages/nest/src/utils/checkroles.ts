export function checkRoles(
	userRole: string,
	authenticatedUserRole: any,
): boolean {
	const roles: string[] = Array.isArray(authenticatedUserRole)
		? authenticatedUserRole
		: [authenticatedUserRole];
	return roles.includes(userRole);
}
