import {Controller, Get} from "@nestjs/common";
import {UserService} from "./user.service";

@Controller('/v1/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/')
  getUser() {
    return this.userService.getUser();
  }
}
