import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SystemConfig, systemConfiguration } from "@to-get-there/config";
import {AppModule} from "./app/app.module";
import {getNestGRPCConfig} from "@to-get-there/grpc";

async function bootstrap(config: SystemConfig) {
  const app = await NestFactory.createMicroservice(AppModule, getNestGRPCConfig('user'));

  console.log(config.userService)

  await app.listen();

  return config.userService;
}

bootstrap(systemConfiguration)
  .then((data) => Logger.log(`🚀 GRPC User Service is running: ${data.URL}:${data.PORT}`))
  .catch(Logger.error);
