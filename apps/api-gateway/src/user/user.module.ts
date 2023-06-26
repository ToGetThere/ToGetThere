import {Module} from "@nestjs/common";
import {UserController} from "./user.controller";
import {UserService} from "./user.service";
import {ClientsModule} from "@nestjs/microservices";
import {getNestGRPCConfig} from "@to-get-there/grpc";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'GRPCUserService',
        ...getNestGRPCConfig('user'),
      },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
