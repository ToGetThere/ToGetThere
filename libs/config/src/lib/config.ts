import * as process from "process";

export type ServiceConfig = {
  URL_PREFIX: string;
  URL: string;
  PORT: number;
}

export type SystemConfig = {
  apiGateway: ServiceConfig;
  authService: ServiceConfig;
  fileService: ServiceConfig;
  messagingService: ServiceConfig;
  placeService: ServiceConfig;
  userService: ServiceConfig;
  dev: boolean;
}

const getConfiguration = (module: string) => {
  return {
    PORT: Number.parseInt(process.env[`${module}_PORT`] ?? '3000'),
    URL: process.env[`${module}_URL`] ?? '',
    URL_PREFIX: 'api',
  }
}

export const systemConfiguration: SystemConfig = {
  apiGateway: getConfiguration('API_GATEWAY'),
  authService: getConfiguration('AUTH_SERVICE'),
  fileService: getConfiguration('FILE_SERVICE'),
  messagingService: getConfiguration('MESSAGING_SERVICE'),
  placeService: getConfiguration('PLACE_SERVICE'),
  userService: getConfiguration('USER_SERVICE'),
  dev: process.env['NODE_ENV'] === 'development'
}
