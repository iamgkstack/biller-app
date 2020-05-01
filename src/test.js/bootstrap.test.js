import supertest from 'supertest';
import dotenv from 'dotenv';

import { setup } from '../sql';

process.env.NODE_ENV = 'test'; // just in case if test started by `mocha`
/* Load config from .env file at very beginning of app */
dotenv.config();

import { start, lower, sequelize, models } from '../index';

const request = supertest(require('../index').default);

before(done => {
  start(async () => {
    global.request = request;
    global.sequelize = sequelize;
    global.models = models;

    await setup(sequelize);
    done();
  });
});

after(done => {
  lower(done);
});
