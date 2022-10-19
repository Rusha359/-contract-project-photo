const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      name: 'Alex',
      email: 'example@mail.ru',
      password: await bcrypt.hash('12345678', 10),
      avatar: '#',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Tony',
      email: 'example2@mail.ru',
      password: await bcrypt.hash('87654321', 10),
      avatar: '#',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('User', null, {});
  },
};
