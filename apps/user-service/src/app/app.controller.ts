import { Controller } from '@nestjs/common';

import { AppService } from './app.service';
import {GrpcMethod} from "@nestjs/microservices";
import {User} from "@to-get-there/types";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('UserService', 'getUser')
  getUser(): User {
    return {
      id: 'asdf',
      name: 'ok i pull up'
    };
  }
}
