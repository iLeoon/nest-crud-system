import { PassportSerializer } from "@nestjs/passport";
import { UserDTO } from "src/users/dto/users.dto";
import { UsersService } from "src/users/users.service";

export class SessionSerializer extends PassportSerializer {
  constructor(private readonly userService: UsersService) {
    super();
  }

  serializeUser(user: UserDTO, done: (err, user: UserDTO) => void) {
    done(null, user);
  }

  async deserializeUser(user: UserDTO, done: (err, user: UserDTO) => void) {
    return done(null, user);
  }
}
