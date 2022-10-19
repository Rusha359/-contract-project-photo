/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Photos', [{
      img: 'https://kulturologia.ru/files/u18476/cote-2.jpg',
      album_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      img: 'https://kulturologia.ru/files/u18476/cote-8.jpg',
      album_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      img: 'https://krasivosti.pro/uploads/posts/2021-03/1616460715_29-p-klassnie-kotiki-foto-koshka-32.jpg',
      album_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      img: 'https://krasivosti.pro/uploads/posts/2021-03/1616460699_53-p-klassnie-kotiki-foto-koshka-59.jpg',
      album_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      img: 'https://krasivosti.pro/uploads/posts/2021-03/1616460675_37-p-klassnie-kotiki-foto-koshka-40.jpg',
      album_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      img: 'https://krasivosti.pro/uploads/posts/2021-03/thumbs/1616460701_34-p-klassnie-kotiki-foto-koshka-37.jpg',
      album_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      img: 'https://krasivosti.pro/uploads/posts/2021-04/1617911551_23-p-smeshnoi-rizhii-kot-25.jpg',
      album_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Photo', null, {});
  },
};
