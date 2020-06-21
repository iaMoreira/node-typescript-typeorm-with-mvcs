import 'dotenv/config';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import App from './app';
import config from './ormconfig';
import UserController from './controllers/user.controller';
 
(async () => {
  try {
    await createConnection(config);
  } catch (error) {
    console.log('Error while connecting to the database', error);
    return error;
  }
  const app = new App(
    [
      new UserController(),
    ],
  );
  app.listen();
})();