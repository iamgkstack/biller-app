/**
 * TEST environment settings
 *
 */

module.exports = {
  port: 5201,
  prefix: '/api',
  JWT_SECRET: process.env.JWT_SECRET || 'iwufh89whrb32hjbr.023fsadlkfj4.3wepo',
  /* `AUD` is nothing but it's a `schemaId` whicj has been shared to setu */
  AUD: process.env.SCHEMA_ID || 'iwufh88whrb43hjbr.034fsadlkfj5.6wepq',
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
