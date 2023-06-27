import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {systemConfiguration} from "@to-get-there/config";
import {User} from "../model/user.model";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: systemConfiguration.userService.database.HOST,
      port: 5432,
      username: systemConfiguration.userService.database.USER,
      password: systemConfiguration.userService.database.PASSWORD,
      database: systemConfiguration.userService.database.NAME,
      entities: [User],
      synchronize: true, //systemConfiguration.dev
      retryAttempts: 1000
    }),
    TypeOrmModule.forFeature([User])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
