import { Injectable } from '@nestjs/common';
import {User} from "../model/user.model";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {from, Observable} from "rxjs";

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  getUser(): Observable<User> {
    return from(this.usersRepository.findOne({
      where: [{id: 1}]
    }));
  }
}
