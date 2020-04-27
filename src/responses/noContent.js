module.exports = res => () => {
  const status = 204;

  return res.status(status).json();
};
