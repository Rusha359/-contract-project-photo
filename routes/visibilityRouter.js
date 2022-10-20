const visibilityRouter = require('express').Router();
const UserAlbums = require('../views/UserAlbums');
const { Album } = require('../db/models');

visibilityRouter.get('/', async (req, res) => {
  const albums = await Album.findAll({
    raw: true,
    where: {
      visibility: 'public',
    },
  });

  res.renderComponent(UserAlbums, { albums });
});

module.exports = visibilityRouter;
