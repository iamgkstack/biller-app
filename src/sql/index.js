/* eslint-disable no-console */
import fs from'fs';
import path from'path';
import glob from'glob';
import series from'async/series';

module.exports = {
  setup: sequelize => {
    const seeds = glob.sync(path.join(process.cwd(), 'src/sql/seeds/*'));

    const queries = [...seeds].map(filename => fs.readFileSync(filename).toString());

    const functionsList = [];
    let queryFunction;

    queries.forEach(query => {
      queryFunction = next => {
        sequelize
          .query(query)
          .then(() => next())
          .catch(next);
      };

      functionsList.push(queryFunction);
    });

    return new Promise((resolve, reject) => {
      series(functionsList, err => {
        if (err) return reject(err);

        console.log('=========================== done ==============================');
        return resolve();
      });
    });
  },

  truncate: sequelize => {
    const tables = fs
      .readdirSync(`${__dirname}/tables`)
      .filter(f => f.includes('.sql'))
      .map(f => f.replace('.sql', ''));

    const query = `TRUNCATE ${tables.join(', ')} RESTART IDENTITY;`;

    return sequelize.query(query);
  }
};
