/**
 * Production environment settings
 *
 * This file can include shared settings for a production environment,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */
module.exports = {
  port: 5200,
  prefix: '/api',
  JWT_SECRET: process.env.JWT_SECRET || 'iwufh89whrb32hjbr.023fsadlkfj4.3wepo',
  /* `AUD` is nothing but it's a `schemaId` whicj has been shared to setu */
  AUD: process.env.AUD || 'iwufh88whrb43hjbr.034fsadlkfj5.6wepq',
  postgresql: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.BILLER_DB,
    dialect: 'postgres',
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  },
};
