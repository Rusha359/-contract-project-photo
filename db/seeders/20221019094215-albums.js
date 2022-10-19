/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Albums', [{
      visibility: 'public',
      user_id: 1,
      title: 'Cats',
      title_img: 'https://cs.pikabu.ru/post_img/2013/02/03/8/1359890268_1901634181.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Album', null, {});
  },
};
