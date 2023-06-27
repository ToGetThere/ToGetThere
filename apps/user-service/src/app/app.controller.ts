import { Controller } from '@nestjs/common';

import { AppService } from './app.service';
import {GrpcMethod} from "@nestjs/microservices";
import {User} from "@to-get-there/types";
import {Observable} from "rxjs";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('UserService', 'getUser')
  getUser(): Observable<User> {
    return this.appService.getUser();
  }
}
