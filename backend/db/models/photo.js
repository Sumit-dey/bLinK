'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    userId: DataTypes.INTEGER,
    albumId: DataTypes.INTEGER,
    photoUrl: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {});
  Photo.associate = function(models) {
    Photo.belongsTo(models.User, {
      foreignKey: "userId",
    });
    Photo.belongsTo(models.Album, {
      foreignKey: "albumId",
    });
    Photo.hasMany(models.Comment, {
      foreignKey: "photoId",
      onDelete: "cascade",
      hooks: true,
    });
  };
  return Photo;
};
