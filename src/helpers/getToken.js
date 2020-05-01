/**
 * Extracts token from req object and returns it if found otherwise undefined
 * @param req
 * @returns {String|undefined}
 */
const getToken = req => {
  if (typeof req.headers.authorization === 'string') {
    return req.headers.authorization.split(' ')[1];
  }
  return undefined;
}

module.exports = getToken;