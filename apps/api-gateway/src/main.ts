import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SystemConfig, systemConfiguration } from "@to-get-there/config";
import { setupSwagger } from "./utils/setup-swagger.utils";
import {AppModule} from "./app/app.module";

async function bootstrap(config: SystemConfig) {
  const port = config.apiGateway.PORT;
  const globalPrefix = config.apiGateway.URL_PREFIX;

  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix(globalPrefix);

  setupSwagger(app);

  await app.listen(port);

  return config.apiGateway;
}

bootstrap(systemConfiguration)
  .then((data) => Logger.log(`🚀 API Gateway is running! Check out the docs: ${data.URL}:${data.PORT}/docs`))
  .catch(Logger.error);
