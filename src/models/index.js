import fs from 'fs';
import Sequelize from 'sequelize';
import config from '../config';

let sequelize;

if(process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    timezone: 'utc'
  });
} else {
  sequelize = new Sequelize(
    config.postgresql.database,
    config.postgresql.username,
    config.postgresql.password,
    {
      ...config.postgresql
    }
  );
}


const models = {};
fs.readdirSync(__dirname)
  .filter(f => !f.includes('index.js'))
  .forEach(filename => {
    const name = filename.split('.')[0];
    Object.assign(models, { [`${name.charAt(0).toUpperCase()}${name.slice(1)}`]: sequelize.import(`./${filename}`) });
  });

/*
 *  Setup any associations here
 */

Object.keys(models).forEach(key => {
  const model = models[key];

  if (model && 'associate' in model) model.associate(models);
});

module.exports = {
  sequelize,
  models
};
