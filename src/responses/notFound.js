module.exports = res => data => {
  const status = 404;
  const message = data || {
    message: 'Requested resource is not found!'
  };
  return res.status(status).json(message);
};
