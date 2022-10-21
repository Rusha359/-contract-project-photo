const router = require('express').Router();
const { Photo } = require('../db/models');
const UserPhotos = require('../views/UserPhotos');
const FormAddPhoto = require('../views/FormAddPhoto');
const multer = require('../middleware/multer');
const { Album } = require('../db/models');

// путь /photo/albums/:id
router.get('/albums/:id', async (req, res) => {
  const { id } = req.params.id;

  const photos = await Photo.findAll({ where: { album_id: req.params.id } });

  res.renderComponent(UserPhotos, { photos, albumsId: req.params.id });
});

// путь /photo/add/albums/:id
router.get('/add/albums/:id', async (req, res) => {
  const { id } = req.params.id;
  res.renderComponent(FormAddPhoto, { albumsId: req.params.id });
});

// путь /photo/add/albums/:id
router.post('/add/albums/:id', multer.single('newPhoto'), async (req, res) => {
  const { id } = req.params.id;
  try {
    const newPhoto = await Photo.create({
      img: req.file.path,
      album_id: req.params.id,
    });
    res.status(201).json({ created: true });
  } catch (err) {
    res.json({ message: `${err.message}` });
  }
});
module.exports = router;
