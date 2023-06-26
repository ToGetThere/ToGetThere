FROM node:lts-alpine
WORKDIR /app
COPY ./dist/apps/api-gateway .
RUN yarn --production
RUN yarn add reflect-metadata tslib rxjs @nestjs/platform-express
CMD node ./main.js
