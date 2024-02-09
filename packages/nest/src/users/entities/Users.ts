import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

@Entity({ name: 'users' })
export class Users {
	@ObjectIdColumn()
	_id: ObjectId;

	@Column()
	email: string;

	@Column()
	password: string;

	@Column()
	name: string;

	@Column()
	roles: string[];
}
