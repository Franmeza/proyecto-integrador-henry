require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const FavoriteModel = require("./models/Favorite");
const UserModel = require("./models/User");

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const database = new Sequelize(
  // URL
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,

  {
    logging: false,
    native: false,
    //   dialectOptions: {
    //     ssl: {
    //       require: true,
    //       rejectUnauthorized: false, // Solo si tu certificado SSL no es de confianza
    //     },
    //   },
  }
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.

FavoriteModel(database);
UserModel(database);

//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
const { User, Favorite } = database.models;

User.belongsToMany(Favorite, { through: "user_favorite" });
Favorite.belongsToMany(User, { through: "user_favorite" });

module.exports = {
  User,
  Favorite,
  conn: database,
};
