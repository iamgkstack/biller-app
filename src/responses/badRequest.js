module.exports = res => data => {
  const status = 400;

  return res.status(status).json(data);
};