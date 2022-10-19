const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Photo }) {
      Album.User = Album.belongsTo(User, { foreignKey: 'user_id' });
      Album.Photo = Album.hasMany(Photo, { foreignKey: 'album_id' });
    }
  }
  Album.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    visibility: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    title: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Album',
  });
  return Album;
};
