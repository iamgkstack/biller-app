module.exports = res => data => {
  const status = 201;

  return res.status(status).json(data);
};
