const albumsRouter = require('express').Router();
const UserAlbums = require('../views/UserAlbums');
const AlbumCard = require('../views/AlbumCard');
const { Album } = require('../db/models');

albumsRouter.get('/', async (req, res) => {
  const albums = await Album.findAll({ raw: true });

  res.renderComponent(UserAlbums, { albums });
});

albumsRouter.get('/:id', (req, res) => {
  

  res.renderComponent(AlbumCard, {});
});

module.exports = albumsRouter;
