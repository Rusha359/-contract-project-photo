const photosRouter = require('express').Router();
const { Photo } = require('../db/models');
const UserPhotos = require('../views/UserPhotos');

photosRouter.get('/:id/albums/:id', async (req, res) => {

  const {id} = req.params.id
  const photo = await Photo.findAll({ where: { id: album.id } });
  res.renderComponent(UserPhotos, { });
});

module.exports = photosRouter;
