const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Album, Comment_photo }) {
      Photo.Album = Photo.belongsTo(Album, { foreignKey: 'album_id' });
      Photo.Comment_photo = Photo.hasMany(Comment_photo, { foreignKey: 'photo_id' });
    }
  }
  Photo.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    img: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    album_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Albums',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Photo',
  });
  return Photo;
};
