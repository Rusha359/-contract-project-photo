const router = require('express').Router();
const createAlbumPage = require('../views/CreateAlbumPage');
const { Album } = require('../db/models')

router.get('/:id', (req, res) => {
    res.renderComponent(createAlbumPage);
});
router.post('/:id', async (req, res) => {
    const { id } = req.params.id
    const { title, visibility } = req.body
    console.log(req.body, '<----------')
    const newAlbum = await Album.create({
        visibility: visibility,
        user_id: req.params.id,
        title: title,
        title_img: '#'
    })
});

module.exports = router;