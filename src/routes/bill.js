import BillController from '../controllers/BillController';

module.exports = [
  {
    version: 'v1',
    path: 'fetch/bill',
    method: 'get',
    action: BillController.fetchBill
  },
  {
    version: 'v1',
    path: 'fetch/billReceipt',
    method: 'put',
    action: BillController.fetchBillReceipt
  }
];