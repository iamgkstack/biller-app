const bill = (sequelize, DataTypes) => {
  const Bill = sequelize.define('bill', {
    id: {
     allowNull: false,
     primaryKey: true,
     type: DataTypes.UUID,
     defaultValue: DataTypes.UUIDV1 
    },
    customerID: {
      type: DataTypes.UUID,
      allowNull: false
    },
    generatedOn: {
      type: DataTypes.DATE
    },
    dueDate: {
      type: DataTypes.DATE
    },
    recurrence: {
      type: DataTypes.ENUM,
      values: [
        'ONE_TIME',
        'DAILY',
        'WEEKLY',
        'FORTNIGHTLY',
        'MONTHLY',
        'QUARTERLY',
        'HALF_YEARLY',
        'YEARLY',
        'AS_PRESENTED'
      ]
    },
    billType: {
      type: DataTypes.ENUM,
      values: ['GST', 'COLLECT']
    },
    billerBillID: {
      type: DataTypes.STRING
    },
    platformBillID: {
      type: DataTypes.STRING
    },
    billerCategory: {
      type: DataTypes.STRING
    },
    billerProductInstanceID: {
      type: DataTypes.STRING
    },
    amountExactness: {
      type: DataTypes.ENUM,
      values: [
        'ANY',
        'EXACT',
        'EXACT_UP',
        'EXACT_DOWN',
        'RANGE'
      ]
    },
    validationRules: {
      type: DataTypes.JSONB
    },
    billFetchStatus: {
      type: DataTypes.ENUM,
      values: ['AVAILABLE', 'NO_OUTSTANDING', 'PENDING']
    },
    platformTransactionRefID: {
      type: DataTypes.STRING
    },
    currencyCode: {
      type: DataTypes.ENUM,
      values: ['INR', 'USD', 'EUR']
    },
    amount: { type: DataTypes.JSONB },
    paymentDetails: { type: DataTypes.JSONB },
    discounts: { type: DataTypes.JSONB },
    fees: { type: DataTypes.ARRAY(DataTypes.JSONB) },
    items: { type: DataTypes.ARRAY(DataTypes.JSONB) },
    taxes: { type: DataTypes.ARRAY(DataTypes.JSONB) },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('NOW()'),
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    }
  });

  return Bill;
};

export default bill;