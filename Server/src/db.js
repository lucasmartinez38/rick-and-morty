const { users, favorites } = require("./models/index");

require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/rickandmorty`,
  {
    logging: false,
  }
);

//////////////////////////   MODELS  ////////////////////////////////
//debajo de esta linea se ejecutan las funciones de los modelos...
users(sequelize);
favorites(sequelize);
/////////////////////////  RELACIONES  ///////////////////////////
//debajo de esta linea se ejecuta la relacion entre las tablas
const { User, Favorite } = sequelize.models;
User.belongsToMany(Favorite, { through: "User_Favorite", timestamps: false });
Favorite.belongsToMany(User, { through: "User_Favorite", timestamps: false });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
