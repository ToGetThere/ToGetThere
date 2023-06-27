// @ts-ignore
import fs from 'fs';
import {join} from "path";

const moveConfig = (configName: string) => {
  const root = join(__dirname, '../');

  const apps = fs.readdirSync(join(root, './apps/'), { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && !dirent.name.includes('app'))
    .map(dirent => dirent.name);

  apps.forEach(app => {
    if (!fs.existsSync(join(root, `./apps/${app}/src/grpc`))) {
      fs.mkdirSync(join(root, `./apps/${app}/src/grpc`));
    }

    fs.copyFileSync(
      join(root, `./libs/grpc/${configName}.proto`),
      join(root, `./apps/${app}/src/grpc/${configName}.proto`),
    );
  });
}

moveConfig('auth');
moveConfig('place');
moveConfig('user');
