import jwt from 'jsonwebtoken';
import uuid from 'uuid/v1';

import config from '../config';

const createToken = async () => {
  const payload = {
    aud: config.AUD,
    jti: uuid()
  };

  const token = await jwt.sign(payload, config.JWT_SECRET, {
    expiresIn: '30m'
  });

  return token;
};

module.exports = createToken;