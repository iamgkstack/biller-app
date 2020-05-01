import jwt from 'jsonwebtoken';
import { getToken } from '../helpers';

// make sure incoming request is authenticated
module.exports.isAuthenticated = async (req, res, next) => {
  const { constants, JWT_SECRET, AUD } = config;

  const accessToken = getToken(req);
  if(!accessToken) return res.unAuthorized({ message: constants.ACCESS_TOKEN_NOTFOUND });

  try {
    const me = await jwt.verify(accessToken, JWT_SECRET, aud=AUD );
    if(!me) return res.unAuthorized();

    req.me = me;
    return next();
  } catch(e) {
    return res.unAuthorized('Your session expired. Please try again');
  }

}