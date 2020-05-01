import fs from'fs';
import config from '../config';

const policies = {};

/*
  Base configurations
 */
fs.readdirSync(__dirname)
  .filter(f => !f.includes('index.js') && !f.includes('__mocks__'))
  .forEach(filename => {
    // eslint-disable-next-line
    Object.assign(policies, require(`./${filename}`));
  });

const modulesToOverride = config.modulesToOverride || {};

/* Overrides policies for tests */
Object.assign(policies, modulesToOverride);

module.exports = policies;
