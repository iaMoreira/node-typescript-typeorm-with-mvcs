import { ConnectionOptions } from 'typeorm';
 
const config: ConnectionOptions = {
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  synchronize: true,
  logging: false,
  entities: [
     "src/entity/**/*.ts"
  ],
  migrations: [
     "src/migration/**/*.ts"
  ],
  subscribers: [
     "src/subscriber/**/*.ts"
  ],
  cli: {
     "entitiesDir": "src/entity",
     "migrationsDir": "src/migration",
     "subscribersDir": "src/subscriber"
  }
};
 
export default config;