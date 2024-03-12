'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Goods', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      goods_model: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      vendor_code: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING(2048),
      },
      images: {
        type: Sequelize.STRING(2048),
      },
      in_stock: {
        type: Sequelize.INTEGER,
      },
      onsale: {
        type: Sequelize.BOOLEAN,
      },
      new: {
        type: Sequelize.BOOLEAN,
      },
      popularity: {
        type: Sequelize.INTEGER,
      },
      discount: {
        type: Sequelize.INTEGER,
      },
      memory: {
        type: Sequelize.INTEGER,
      },
      ram: {
        type: Sequelize.INTEGER,
      },
      cores_num: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Goods');
  },
};
