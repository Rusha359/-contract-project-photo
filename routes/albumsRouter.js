const albumsRouter = require('express').Router();
const UserAlbums = require('../views/UserAlbums');
const { Album } = require('../db/models');

albumsRouter.get('/:id', async (req, res) => {
  const albums = await Album.findAll({
    include: Album.User,
    where: {
      user_id: req.params.id,
    },
  });
  const albumsvis = await Album.findAll({
    raw: true,
    where: {
      visibility: 'public',
    },
  });
  // console.log(albumsvis);
  // res.renderComponent(VisibilityAlbums, { albumsvis }, { doctype: false });
  res.renderComponent(UserAlbums, { albums, albumsvis });
});

// albumsRouter.get('/:id', (req, res) => {
//   res.renderComponent(AlbumCard, {});
// });

module.exports = albumsRouter;
