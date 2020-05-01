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
              name: customer.username,
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
    
  }
}