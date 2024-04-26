import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
	@ObjectIdColumn()
	_id: ObjectId;

	@Column()
	email: string;

	@Column()
	password: string;

	@Column()
	name: string;

	@Column()
	image?: string;

	@Column()
	roles: string;
}
