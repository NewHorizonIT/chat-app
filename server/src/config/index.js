// TEMPLATE ENVIROMENT VARIABLE: <NODE_ENV>_<SERVICE>_<ATTRRIBUTE>. Example: DEV_APP_PORT
function loadConfig(prefix) {
  return {
    app: {
      port: Number(process.env[`${prefix}_APP_PORT`]) || 5000,
      host: process.env[`${prefix}_APP_HOST`] || 'localhost',
      name: process.env[`${prefix}_APP_NAME`] || 'chat-app',
    },
    db: {
      name: process.env[`${prefix}_DB_NAME`] || 'chat-app-db',
      host: process.env[`${prefix}_DB_HOST`] || 'localhost',
      port: Number(process.env[`${prefix}_DB_PORT`]) || 27017,
      user: process.env[`${prefix}_DB_USER`] || 'root',
      password: process.env[`${prefix}_DB_PASSWORD`] || '123456789',
    },
    redis: {
      name: process.env[`${prefix}_REDIS_NAME`] || 'redis-db',
      password: process.env[`${prefix}_REDIS_PASSWORD`] || 'passwordredis',
      port: Number(process.env[`${prefix}_REDIS_PORT`]) || 6379,
    },
  };
}

const env = process.env.NODE_ENV === 'production' ? 'PRO' : 'DEV';

const config = loadConfig(env);

export default config;
