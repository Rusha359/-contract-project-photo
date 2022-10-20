const router = require('express').Router();
const createAlbumPage = require('../views/CreateAlbumPage');
const { Album } = require('../db/models');

router.get('/:id', (req, res) => {
  res.renderComponent(createAlbumPage);
});
router.post('/:id', async (req, res) => {
  const { title, visibility } = req.body;
  const newAlbum = await Album.create({
    visibility,
    user_id: req.params.id,
    title,
    title_img: '#',
  });
});

module.exports = router;
