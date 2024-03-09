'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Goods extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Goods.init(
    {
      goods_model: DataTypes.STRING,

      price: DataTypes.INTEGER,

      vendor_code: DataTypes.STRING,

      name: DataTypes.STRING,

      description: DataTypes.STRING,

      images: DataTypes.STRING,

      in_stock: DataTypes.INTEGER,

      onsale: DataTypes.BOOLEAN,

      new: DataTypes.BOOLEAN,

      popularity: DataTypes.INTEGER,

      discount: DataTypes.INTEGER,

      memory: DataTypes.INTEGER,

      ram: DataTypes.INTEGER,

      cores_num: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Goods',
    },
  );
  return Goods;
};
