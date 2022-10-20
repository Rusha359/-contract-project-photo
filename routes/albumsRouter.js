const albumsRouter = require('express').Router();
const UserAlbums = require('../views/UserAlbums');
// const AlbumCard = require('../views/AlbumCard');
const { Album } = require('../db/models');

albumsRouter.get('/:id', async (req, res) => {
  const albums = await Album.findAll({
    include: Album.User,
    where: {
      user_id: req.params.id,
    },
  });

  res.renderComponent(UserAlbums, { albums });
});

// albumsRouter.get('/:id', (req, res) => {
//   res.renderComponent(AlbumCard, {});
// });

module.exports = albumsRouter;
