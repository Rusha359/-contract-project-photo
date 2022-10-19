const multer = require('multer'); // это middleware для фреймворка express для обработки multipart/form-data , нужная в первую очередь при загрузке файлов
const path = require('path');
// создаем переменную где будут храниться наши изображения
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'images/');
  },
  filename(req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
// валидация чтобы мы могли загружать только картинки
const types = ['image/png', 'image/jpeg', 'image/jpg'];
// функция проверки файла на валидацию
const fileFilter = (req, file, cb) => {
  if (types.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
module.exports = multer({ storage, fileFilter });
