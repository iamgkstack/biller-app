const HealthCheckController = require('../controllers/HealthCheckController');

module.exports = [
  {
    version: 'v1',
    path: 'healthz',
    method: 'get',
    action: HealthCheckController.find
  }
];
