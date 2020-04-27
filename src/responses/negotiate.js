module.exports = res => data => {
  let statusCode = 500;
  const body = data;

  try {
    statusCode = body.status || 500;

    // Set the status
    // (should be taken care of by res.* methods, but this sets a default just in case)
    res.status(statusCode);
  } catch (e) {} // eslint-disable-line

  // Respond using the appropriate custom response
  if (statusCode === 401) return res.unAuthorized(body);
  if (statusCode === 403) return res.forbidden(body);
  if (statusCode === 404) return res.notFound(body);
  if (statusCode >= 400 && statusCode < 500) return res.badRequest(body);
  return res.serverError(body);
};
