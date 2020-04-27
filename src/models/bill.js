const bill = (sequelize, DataTypes) => {
  const Bill = sequelize.define('bill', {
    id: {
     allowNull: false,
     primaryKey: true,
     type: DataTypes.UUID,
     defaultValue: DataTypes.UUIDV1 
    },
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