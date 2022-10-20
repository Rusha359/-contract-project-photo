const router = require('express').Router();
const { User } = require('../db/models');
const EditProfile = require('../views/EditProfile');
const multer = require('../middleware/multer');
const { Photo } = require('../db/models');

router.get('/:id', async (req, res) => {
  const user = await User.findOne({ where: { id: req.params.id } });
  res.renderComponent(EditProfile, { user });
});

router.post('/:id', multer.single('avatar'), async (req, res) => {
  const user = await User.findOne({ where: { id: req.params.id } });
  user.avatar = req.file.path;
  user.save();
  res.json({ updated: true, id: user.id });
});

module.exports = router;
