import uuid from 'uuid/v1';

const receipt = (sequelize, DataTypes) => {
  const Receipt = sequelize.define('receipt', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: () => uuid() 
    },
    customer: {
      allowNull: false,
      type: DataTypes.UUID
    },
    billerBillID: {
      allowNull: false,
      type: DataTypes.STRING
    },
    uniquePaymentRefID: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING
    },
    platformTransactionRefID: {
      type: DataTypes.STRING,
      allowNull: false,
      uniquePaymentRefID: true
    },
    amount: {
      allowNull: false,
      type: DataTypes.STRING
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('NOW()'),
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    }
  })
  return Receipt;
};

export default receipt;