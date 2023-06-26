import {Transport} from "@nestjs/microservices";
import {systemConfiguration} from '@to-get-there/config';
import {join} from 'path';
import {ClientProvider} from "@nestjs/microservices/module/interfaces/clients-module.interface";

export const getNestGRPCConfig = (module: string): ClientProvider => {
  const config = systemConfiguration[`${module}Service`];
  const protoPath = systemConfiguration.dev ?
    join(__dirname, `../../../libs/grpc/${module}.proto`) :
    join(__dirname, `./grpc/${module}.proto`);

  return {
    transport: Transport.GRPC,
    options: {
      package: module,
      protoPath: protoPath,
      url: `${config.URL}:${config.PORT}`
    }
  };
}
