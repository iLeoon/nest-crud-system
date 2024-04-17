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
