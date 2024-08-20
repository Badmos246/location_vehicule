const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//     host: dbConfig.HOST,
//     dialect: dbConfig.dialect,
//     operatorsAliases: false,
// });
const sequelize = new Sequelize(
  "postgresql://location_jgzl_user:uZpioKAmUvjFipa9JQvO8CYFi4vcWSU0@dpg-cr27qn0gph6c73bhsu8g-a.oregon-postgres.render.com/location_jgzl",
  {
    dialect: "postgres",
    protocol: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
      },
    }, //removed ssl
  }
); // Example for postgres

const db = {};
db.sequelize = Sequelize;
db.sequelize = sequelize;

db.vehicule = require("./vehicule.models.js")(sequelize, Sequelize);
db.utilisateur = require("./utilisateur.models.js")(sequelize, Sequelize);
db.location = require("./location.models.js")(sequelize, Sequelize);
db.categories = require("./categories.models.js")(sequelize, Sequelize);
db.inscription = require("./inscription.models.js")(sequelize, Sequelize);
db.reservation = require("./reservation.models.js")(sequelize, Sequelize);
db.administrateur = require("./administrateur.models.js")(sequelize, Sequelize);
db.villes = require("./villes.models.js")(sequelize, Sequelize);

db.utilisateur.hasMany(db.location, {
  foreignKey: "utilisateur",
});

db.vehicule.hasMany(db.location, {
  foreignKey: "vehicule",
});

db.categories.hasMany(db.vehicule, {
  foreignKey: "categorie",
});

db.vehicule.hasMany(db.vehicule, {
  foreignKey: "vehicule",
});

module.exports = db;
