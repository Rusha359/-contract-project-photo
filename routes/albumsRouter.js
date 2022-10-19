const albumsRouter = require('express').Router();
const UserAlbums = require('../views/UserAlbums');
const AlbumCard = require('../views/AlbumCard');

albumsRouter.get('/', (req, res) => {
  res.renderComponent(UserAlbums, {});
});

albumsRouter.get('/:id', (req, res) => {
  res.renderComponent(AlbumCard, {});
});

module.exports = albumsRouter;
