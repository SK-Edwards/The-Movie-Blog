const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Movie extends Model {}

Movie.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    movie_info: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    poster: {
      type: DataTypes.STRING,
    },
    star_rating: {
      type: DataTypes.INTEGER,
    },
    like: {
      type: DataTypes.INTEGER,
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "movie",
  }
);

module.exports = Movie;
