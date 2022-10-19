const router = require('express').Router();
const { User } = require('../db/models');

const Profile = require('../views/Profile');

// отрисовка из базы, без сессии, по id
router.get('/:id', async (req, res) => {
  const user = await User.findOne({ where: { id: req.params.id } });
  res.renderComponent(Profile, {
    user,
  });
});

module.exports = router;
