/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Comment_photos', [{
      photo_id: 1,
      comment: 'Добрый день!',
    }]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Comment_photo');
  },
};
