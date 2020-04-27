module.exports = res => data => {
  const status = 200;

  return res.status(status).json(data);
};
