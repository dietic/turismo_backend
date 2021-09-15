import dotenv from 'dotenv';

dotenv.config();

[
  'APP_SERVICE',
  'NODE_ENV',
  'APP_SERVICE_PORT',
  'API_VERSION'
].forEach((pc: string) => {
  if (!process.env[pc]) {
    throw new Error(`Environment variable ${pc} is missing`);
  }
});

const config = {
  app: {
    name: process.env.APP_NAME,
    version: process.env.API_VERSION,
    service: process.env.APP_SERVICE
  },
  server: {
    port: process.env.APP_SERVICE_PORT,
    environment: process.env.NODE_ENV
  },
  database: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    name: process.env.POSTGRES_DATABASE
  }

};

export default config;
