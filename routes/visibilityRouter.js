const visibilityRouter = require('express').Router();
const VisibilityAlbums = require('../views/VisibilityAlbums');
const { Album } = require('../db/models');

visibilityRouter.get('/', async (req, res) => {
  const albums = await Album.findAll({
    raw: true,
    where: {
      visibility: 'public',
    },
  });

  res.renderComponent(VisibilityAlbums, { albums });
});

module.exports = visibilityRouter;
