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
  console.log(albums);
  res.renderComponent(VisibilityAlbums, { albums }, { doctype: false });
});

module.exports = visibilityRouter;
