const DB_HOST = 'localhost';
const DB_PORT = '27017';
const DB_NAME = 'hackathon';
const DB_USER = '';
const DB_PASS = '';

const REDIS_HOST = 'localhost';
const REDIS_PORT = 6379;
const REDIS_PASS = '';
const redisConfig = {
  host: REDIS_HOST,
  port: REDIS_PORT,
  auth: REDIS_PASS
};

export default {
  mongoURL: process.env.MONGO_URL || `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`,

  JWT_SECRET: 'gfgfhfh',

  uploadPath: 'uploads',

  useExpressStatic: true,

  kue: {
    prefix: 'q',
    redis: redisConfig
  },
  kueUI: {
    port: 3052
  },
};
