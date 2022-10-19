const router = require('express').Router();

const LoadPhoto = require('../views/LoadPhoto');

router.get('/', (req, res) => {
  res.renderComponent(LoadPhoto, {});
});
router.post('/', (req, res) => {

})