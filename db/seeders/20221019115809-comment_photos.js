/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const commentData = [
      {
        photo_id: 1,
        comment: 'Добрый день!',
      },
    ];
    await queryInterface.bulkInsert('Comment_photos', commentData);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Comment_photo');
  },
};
