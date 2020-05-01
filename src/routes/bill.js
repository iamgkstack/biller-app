import BillController from '../controllers/BillController';
import policies from '../policies';

module.exports = [
  {
    version: 'v1',
    path: 'fetch/bill',
    method: 'get',
    action: BillController.fetchBill,
    policies: [policies.isAuthenticated]
  },
  {
    version: 'v1',
    path: 'fetch/billReceipt',
    method: 'put',
    action: BillController.fetchBillReceipt,
    policies: [policies.isAuthenticated]
  }
];