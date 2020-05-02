/**
 * Development environment settings
 *
 */

module.exports = {
  port: 5200,
  prefix: '/api',
  JWT_SECRET: process.env.JWT_SECRET || 'iwufh89whrb32hjbr.023fsadlkfj4.3wepo',
  /* `AUD` is nothing but it's a `schemaId` which has been shared to setu */
  AUD: process.env.AUD || 'iwufh88whrb43hjbr.034fsadlkfj5.6wepq',
  postgresql: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    database: process.env.BILLER_DB || 'biller_db',
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
