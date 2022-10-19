/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const albumData = [
      {
        visibility: 'public',
        user_id: 1,
        title: 'Cats',
        title_img: 'https://cs.pikabu.ru/post_img/2013/02/03/8/1359890268_1901634181.jpg',
      },
      {
        visibility: 'private',
        user_id: 2,
        title: 'Dogs',
        title_img: 'https://cs.pikabu.ru/post_img/2013/02/03/8/1359890268_1901634181.jpg',
      },
      {
        visibility: 'private',
        user_id: 2,
        title: 'Romashki',
        title_img: 'https://cs.pikabu.ru/post_img/2013/02/03/8/1359890268_1901634181.jpg',
      },
      {
        visibility: 'public',
        user_id: 1,
        title: 'Wedding day',
        title_img: 'https://cs.pikabu.ru/post_img/2013/02/03/8/1359890268_1901634181.jpg',
      },
    ];
    const albums = albumData.map((album) => ({
      ...album,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert('Albums', albums);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Albums');
  },
};
