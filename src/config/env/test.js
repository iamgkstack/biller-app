/**
 * TEST environment settings
 *
 */

module.exports = {
  port: 5201,
  prefix: '/api',
  postgresql: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    database: process.env.BILLER_DB_TEST || 'biller_db_test',
    dialect: 'postgres',
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  },
};
