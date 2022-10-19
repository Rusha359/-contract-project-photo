/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const photoData = [
      {
        img: 'https://kulturologia.ru/files/u18476/cote-2.jpg',
        album_id: 1,
      },
      {
        img: 'https://kulturologia.ru/files/u18476/cote-8.jpg',
        album_id: 1,
      },
      {
        img: 'https://krasivosti.pro/uploads/posts/2021-03/1616460715_29-p-klassnie-kotiki-foto-koshka-32.jpg',
        album_id: 1,
      },
      {
        img: 'https://krasivosti.pro/uploads/posts/2021-03/1616460699_53-p-klassnie-kotiki-foto-koshka-59.jpg',
        album_id: 1,
      },
      {
        img: 'https://krasivosti.pro/uploads/posts/2021-03/1616460675_37-p-klassnie-kotiki-foto-koshka-40.jpg',
        album_id: 1,
      },
      {
        img: 'https://krasivosti.pro/uploads/posts/2021-03/thumbs/1616460701_34-p-klassnie-kotiki-foto-koshka-37.jpg',
        album_id: 1,
      },
      {
        img: 'https://krasivosti.pro/uploads/posts/2021-04/1617911551_23-p-smeshnoi-rizhii-kot-25.jpg',
        album_id: 1,
      },
    ];
    const photos = photoData.map((photo) => ({
      ...photo,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Photos', photos);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Photos');
  },
};
