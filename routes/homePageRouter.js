const router = require('express').Router();
const HomePage = require('../views/HomePage');
const LoginPage = require('../views/LoginPage');

router.get('/', (req, res) => {
  res.renderComponent(HomePage);
});

router.get('/login', (req, res) => {
  res.renderComponent(LoginPage);
});

router.post('/', async (req, res) => {
  try {
    const { name, password } = req.body;
    const user = await User.findOne({
      where: { name },
    });
    if (!user) {
      res.json({ status: 'error', message: 'Такого пользователя не существует' });
      return;
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      res.json({ status: 'error', message: 'Такой пары пользователь-пароль не существует' });
      return;
    }
    req.session.user_id = user.id;
    res.json({ status: true });
  } catch (error) {
    res.json({ status: false });
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: 'Session delete error' });
    }
    res.clearCookie('user_sid').redirect('/');
  });
});

module.exports = router;
