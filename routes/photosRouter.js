const photosRouter = require('express').Router();
const AlbumCard = require('../views/AlbumCard');
const { Photo } = require('../db/models');

photosRouter.get('/:id', async (req, res) => {
  const photos = await Photo.findAll({ raw: true });
  res.renderComponent(AlbumCard, { photos });
});

module.exports = photosRouter;
