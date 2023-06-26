import { Module } from '@nestjs/common';
import {AuthModule} from "../auth/auth.module";
import {PlaceModule} from "../place/place.module";
import {UserModule} from "../user/user.module";

@Module({
  imports: [
    AuthModule,
    PlaceModule,
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
