const router = require('express').Router();

const LoadPhoto = require('../views/LoadPhoto');
const fileMiddleWare = require('../middleware/multer');
const { Photo } = require('../db/models')

router.get('/', (req, res) => {
  res.renderComponent(LoadPhoto, {});
});
router.post('/', fileMiddleWare.single('image'), (req, res) => {
  try {
    if (req.file) {
      res.json(req.file);
    }
    // res.send('фото загружено')
  } catch (error) {
    console.log(error);
  }
});

module.exports = router