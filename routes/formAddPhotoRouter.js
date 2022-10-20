const router = require('express').Router();
const { User } = require('../db/models');
const FormAddPhoto = require('../views/FormAddPhoto');
const multer = require('../middleware/multer');
const { Photo } = require('../db/models');

router.get('/:id', async (req, res) => {
  res.renderComponent(FormAddPhoto);
});

// router.post('/:id', multer.single('avatar'), async (req, res) => {
//   try {
//     const user = await User.findOne({ where: { id: req.params.id } });
//     user.avatar = req.file.path;
//     user.save();
//     res.json({ updated: true, id: user.id });
//   } catch (err) {
//     res.json({ message: `${err.message}` });
//   }
// });

module.exports = router;
