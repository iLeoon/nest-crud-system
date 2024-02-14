export type User = {
  email: string;
  name: string;
  roles: string[];
};
export type credentialsUser = Pick<User, 'email'> & { password: string };
