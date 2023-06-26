import {Controller, Get} from "@nestjs/common";
import {AuthService} from "./auth.service";

@Controller('/v1/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('/')
  login() {
    return this.authService.login();
  }
}
