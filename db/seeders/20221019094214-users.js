const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const userData = [
      {
        name: 'Alex',
        email: 'example@mail.ru',
        password: await bcrypt.hash('12345678', 10),
        avatar: 'https://tipik.ru/wp-content/uploads/2021/02/%D0%A1%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D1%81%D0%BC%D0%B5%D1%88%D0%BD%D1%8B%D0%B5-%D1%84%D0%BE%D1%82%D0%BA%D0%B8-%D0%BD%D0%B0-%D0%B0%D0%B2%D1%83-%D0%BF%D1%80%D0%B8%D0%BA%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-1.jpeg',
      },
      {
        name: 'Tony',
        email: 'example2@mail.ru',
        password: await bcrypt.hash('87654321', 10),
        avatar: 'https://tipik.ru/wp-content/uploads/2021/02/%D0%A1%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D1%81%D0%BC%D0%B5%D1%88%D0%BD%D1%8B%D0%B5-%D1%84%D0%BE%D1%82%D0%BA%D0%B8-%D0%BD%D0%B0-%D0%B0%D0%B2%D1%83-%D0%BF%D1%80%D0%B8%D0%BA%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-14.jpeg',
      },
    ];
    const users = userData.map((user) => ({
      ...user,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Users', users);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users');
  },
};
