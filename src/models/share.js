'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class share extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.share.hasMany(models.transaction, { foreignKey: 'share_id', sourceKey: 'id', as: 'share_transactions' });
    }
  }
  share.init({
    symbol: DataTypes.STRING,
    price: DataTypes.FLOAT,
    is_registered: DataTypes.BOOLEAN,
    is_active: DataTypes.BOOLEAN,
    is_deleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'share',
  });
  return share;
};