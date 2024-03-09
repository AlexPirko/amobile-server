const { faker } = require('@faker-js/faker');
('use strict');

const goodsModel = [
  'Apple',
  'Huawei',
  'Honor',
  'Xiaomi',
  'Poco',
  'Samsung',
  'LG',
  'Sony',
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'Goods',
      [...Array(30)].map(() => ({
        goods_model: goodsModel[Math.floor(Math.random() * goodsModel.length)],
        price: faker.string.numeric(4),
        name: faker.lorem.sentence(2),
        description: faker.lorem.sentence(10),
        images: `${faker.image.url()}?random=${faker.string.numeric(30)}`,
        vendor_code: faker.internet.password(),
        in_stock: faker.string.numeric(1),
        onsale: faker.datatype.boolean(),
        new: faker.datatype.boolean(),
        popularity: faker.string.numeric(3),
        discount: faker.string.numeric(2),
        memory: faker.string.numeric(3),
        ram: faker.string.numeric(3),
        cores_num: faker.string.numeric(1),
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Goods', null, {});
  },
};
