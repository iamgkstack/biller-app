/**
 * HealthCheckController
 *
 * @description :: Sole purpose of this controller is to satisfy health check for this app
 */

module.exports = {
  find: (req, res) => res.status(200).json({ message: 'All is well!!' })
};
