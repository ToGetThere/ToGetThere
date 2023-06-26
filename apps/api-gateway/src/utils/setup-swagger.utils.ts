import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {INestApplication} from "@nestjs/common";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const pack = require('../../../../package.json');

export const setupSwagger = (app: INestApplication) => {
  const _config = new DocumentBuilder()
    .setTitle('ToGetThere API')
    .setDescription('ToGetThere API description')
    .setVersion(pack.version)
    .build();

  const document = SwaggerModule.createDocument(app, _config);

  SwaggerModule.setup('docs', app, document);
}
