require('@babel/register');

const express = require('express');
const { sequelize } = require('./db/models');

const configApp = require('./config/serverConfig');
const Album = require('./view/Album');
const LoadPhoto = require('./view/LoadPhoto');
const albumsRouter = require('./routes/albumsRouter');
const homePageRouter = require('./routes/homePageRouter');
const registrationRouter = require('./routes/registrationRouter');
const loginPageRouter = require('./routes/loginPageRouter');


const app = express();

const PORT = process.env.PORT ?? 3000;

configApp(app);

// запуск роутеров

app.use('/albums', albumsRouter);

app.use('/', homePageRouter);
app.use('/registration', registrationRouter);
app.use('/login', loginPageRouter);


app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log(`Server has been started on port ${PORT}`);
  } catch (e) {
    console.log(`DB issues! ${e.message}.`);
  }
});
