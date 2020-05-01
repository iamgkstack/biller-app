require('chai').should();
import { createToken } from '../../../../helpers';

describe('fetch receipt API', () => {
  it('should return 200 if receipt fetched successfully', async () => {
    const token = await createToken();
    const payload = {
      "billerBillID"   : "12123131322",
      "platformBillID" : "SETU121341312121",
      "paymentDetails" : {
        "platformTransactionRefID" : "TXN12121219",
        "uniquePaymentRefID"       : "XXXXAYYDDD999999",
        "amountPaid" : {
          "value" : 99000
        },
        "billAmount" : {
          "value" : 99000
        }
      }
    };

    const res = await request.put('/api/v1/fetch/billReceipt').send(payload).set("Authorization", "Bearer " + token);

    res.status.should.be.an.equal(200);
    res.body.should.be.an('object');
  });
});