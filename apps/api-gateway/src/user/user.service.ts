import {Inject, Injectable, OnModuleInit} from "@nestjs/common";
import {ClientGrpc} from "@nestjs/microservices";
import {UserGrpcService} from "./user.grpc-service";
import {Observable} from "rxjs";
import {User} from "@to-get-there/types";

@Injectable()
export class UserService implements OnModuleInit {
  private grpc: UserGrpcService;

  constructor(@Inject('GRPCUserService') private client: ClientGrpc) {}

  onModuleInit() {
    this.grpc = this.client.getService<UserGrpcService>('UserService');
  }

  getUser = (): Observable<User> => {
    return this.grpc.getUser({});
  }
}
