import { Sequelize } from 'sequelize';
import config from './config';

export const sequelize = new Sequelize(
  config.database.name,
  config.database.username,
  config.database.password, {
    dialect: 'postgres',
    host: 'localhost',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    logging: false
  }
);
