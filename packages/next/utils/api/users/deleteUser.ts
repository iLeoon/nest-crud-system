import apiFetch from '../config';

export const deleteUser = async (userid: string) => {
	try {
		await apiFetch.delete(`/users/delete/${userid}`);
	} catch (e) {
		throw new Error(`An error occured while trying to delete the user.`);
	}
};
