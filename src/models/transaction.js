'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.transaction.belongsTo(models.user, { foreignKey: 'user_id', targetKey: 'id', as: 'user' });
      models.transaction.belongsTo(models.share, { foreignKey: 'share_id', targetKey: 'id', as: 'share' });
    }
  }
  transaction.init({
    user_id: DataTypes.STRING,
    share_id: DataTypes.STRING,
    unit_price: DataTypes.FLOAT,
    quantity: DataTypes.FLOAT,
    transaction_type: DataTypes.STRING,
    is_deleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'transaction',
  });
  return transaction;
};