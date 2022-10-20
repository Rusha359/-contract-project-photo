require('@babel/register');

const express = require('express');
const path = require('path');
const { sequelize } = require('./db/models');

const configApp = require('./config/serverConfig');
const albumsRouter = require('./routes/albumsRouter');
const homePageRouter = require('./routes/homePageRouter');
const registrationRouter = require('./routes/registrationRouter');
const loginPageRouter = require('./routes/loginPageRouter');
const profile = require('./routes/profile');
const editProfile = require('./routes/editProfile');
const uploadRouter = require('./routes/uploadRouter');
// const createAlbum = require('./routes/createAlbum');
const createAlbumPage = require('./routes/createAlbumPage');
const formAddPhoto = require('./routes/formAddPhotoRouter');

const app = express();

const PORT = process.env.PORT ?? 3000;

configApp(app);
app.use('/images', express.static(path.join(__dirname, 'images')));

// запуск роутеров
app.use('/mynewalbum', createAlbumPage);
// app.use('/newalbum', createAlbum);
app.use('/upload', uploadRouter);
app.use('/albums', albumsRouter);
app.use('/', homePageRouter);
app.use('/registration', registrationRouter);
app.use('/login', loginPageRouter);
app.use('/profile', profile);
app.use('/edit', editProfile);
app.use('/addphoto', formAddPhoto);

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log(`Server has been started on port ${PORT}`);
  } catch (e) {
    console.log(`DB issues! ${e.message}.`);
  }
});
