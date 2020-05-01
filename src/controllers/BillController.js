module.exports = {
  fetchBill: async (req, res) => {
    const { mobile } = req.query;
    if(!mobile) {
      return res.badRequest({ 
        message: 'Mobile number is required to fetch customer bill' 
      });
    }
    try {
      const customer = await models.Customer.findAll({ where: { mobile }, raw: true } );

      if(!customer.length) {
        const customerNotFound = {
          status: 404,
          success: false,
          error: {
            code: 'customer-not-found',
            title: 'Customer not found',
            traceId: '',
            description: 'The requested customer was not found in the biller system.',
            param: '',
            docURL: ''
          }
        };
        return res.notFound(customerNotFound);
      };

      // fetch the bill of the customer
      const customerBill = await models.Bill.findAll({
        where: { 
          customerID: customer[0].id
        }, 
        raw: true 
      });

      if(!customerBill.length) {
        const customerExistButBillNotFound = {
          status: 200,
          success: true,
          data: {
            customer: {
              name: customer[0].username,
            },
            billDetails: {
              billFetchStatus: 'NO_OUTSTANDING',
              bills: customerBill
            }
          }
        };
        return res.ok(customerExistButBillNotFound);
      };
      const bills = [];
      customerBill.forEach(bill => {
        bills.push({
          billerBillID: bill.billerBillID,
          generatedOn: bill.generatedOn,
          recurrence: bill.recurrence,
          amountExactness: bill.amountExactness,
          customerAccount: {
            id: customer[0].id
          },
          aggregates: {
            total: {
              displayName: 'Total Outstanding',
              amount: {
                currency: bill.currency,
                value: bill.amount
              }
            }
          }
        })
      });

      const customerWithOutStandingBill = {
        status: 200,
        success: true,
        data: {
          customer: {
            username: customer[0].username
          },
          billDetails: {
            billFetchStatus: 'AVAILABLE',
            bills,
          }
        }
      }

      return res.ok(customerWithOutStandingBill);

    } catch(e) {
      return res.serverError(e.message);
    }
  },

  fetchBillReceipt: async (req, res) => {
    const { billerBillID, platformBillID, paymentDetails } = req.body;

    // validate the provided data
    if(!billerBillID || !platformBillID || !paymentDetails) {
      return res.badRequest({
        message: 'billerBillID, platformBillID & paymentDetails is mendatory to fetch updated reciept.'
      });
    };

    // check the types of provided data
    if(
      typeof billerBillID !== 'string' 
      || typeof platformBillID !== 'string' 
      || typeof paymentDetails !== 'object'
    ) {
      return res.badRequest({
        message: 'typeof billerBillID, platformBillID & paymentDetails did not match.'
      });
    };


    try {
      // update the bill agins the billerBillID
      const updatedBill = await models.Bill.update({
        platformBillID,
        paymentDetails,
        updatedAt: sequelize.literal('NOW()')
      }, {
        returning: true,
        raw: true,
        where: { billerBillID }
      });

      // insert the data in receipt against the updated bill
      const reciptObj = {
        customer: updatedBill[1][0].customerID,
        billerBillID: updatedBill[1][0].billerBillID,
        uniquePaymentRefID: updatedBill[1][0].paymentDetails.uniquePaymentRefID,
        platformTransactionRefID: updatedBill[1][0].paymentDetails.platformTransactionRefID,
        amount: updatedBill[1][0].paymentDetails.amountPaid.value
      };

      let insertedReceipt = await models.Receipt.create(reciptObj);
      insertedReceipt = insertedReceipt.toJSON();

      const receipt = {
        status: 200,
        success: true,
        data: {
          billerBillID: insertedReceipt.billerBillID,
          platformBillID: updatedBill[1][0].platformBillID,
          platformTransactionRefID: insertedReceipt.platformTransactionRefID,
          receipt: {
            id: insertedReceipt.id,
            date: insertedReceipt.createdAt
          }
        }
      }

      return res.ok(receipt);
    } catch (e) {
      return res.serverError(e.message);
    }

  }
}