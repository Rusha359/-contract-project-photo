const router = require('express').Router();

const LoadPhoto = require('../views/LoadPhoto');
const fileMiddleWare = require('../middleware/multer');

router.get('/', (req, res) => {
  res.renderComponent(LoadPhoto, {});
});
router.post('/', fileMiddleWare.single('image'), (req, res) => {
  res.send('фото загружено');
})