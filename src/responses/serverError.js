module.exports = res => data => {
  const status = 500;

  return res.status(status).json(data);
};
