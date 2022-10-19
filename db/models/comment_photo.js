const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment_photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Photo }) {
      Comment_photo.Photo = Comment_photo.belongsTo(Photo, { foreignKey: 'photo_id' });
    }
  }
  Comment_photo.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    photo_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Photos',
        key: 'id',
      },
    },
    comment: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Comment_photo',
  });
  return Comment_photo;
};
