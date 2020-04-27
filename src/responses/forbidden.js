module.exports = res => data => {
  const status = 403;
  const message = data || {
    message: 'You are not authorized to perform this action!'
  };
  return res.status(status).json(message);
};
