require('chai').should();
import { createToken } from '../../../../helpers';

// customer, description, type, value
describe('fetch bill API', async () => {
  const token = await createToken();
  it('should return 404 if user is not exist', async () => {
    const res = await request.get('/api/v1/fetch/bill?mobile=1535').set("Authorization", "Bearer " + token);
    res.statusCode.should.equal(404);
    res.body.should.be.an('object');
  });

  it('should return 200 if customer is exist with outstanding bill', async () => {
    const res = await request.get('/api/v1/fetch/bill?mobile=9721867247').set("Authorization", "Bearer " + token);
    res.statusCode.should.equal(200);
    res.body.should.be.an('object');
    res.body.success.should.equal(true);
    res.body.data.should.be.an('object');
    res.body.data.billDetails.bills.should.be.an('array').with.length(1);
  });
});