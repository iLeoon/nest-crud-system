<<<<<<< HEAD
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from '../entities/User';

export const AuthUser = createParamDecorator(
	(data: unknown, ctx: ExecutionContext) => {
		const request = ctx.switchToHttp().getRequest();
		const user: User = request.user;
		// const getId = user._id;
		// const _id = new ObjectId(getId);
		// return { ...user, _id };
		return user;
	},
);
=======
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from '../entities/User';

export const AuthUser = createParamDecorator(
	(data: unknown, ctx: ExecutionContext) => {
		const request = ctx.switchToHttp().getRequest();
		const user: User = request.user;
		// const getId = user._id;
		// const _id = new ObjectId(getId);
		// return { ...user, _id };
		return user;
	},
);
>>>>>>> 06b9776d45a735f3386357a635fe962afdd858e8
