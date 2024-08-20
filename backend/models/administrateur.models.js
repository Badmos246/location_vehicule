module.exports = (sequelize, Sequelize) => {
    const administrateur = sequelize.define("administrateur", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      Nom: {
        type: Sequelize.STRING,
      },
      Prenom: {
        type: Sequelize.STRING,
      },
      Telephone: {
        type: Sequelize.INTEGER,
      },
     
      Password: {
          type: Sequelize.STRING,
        },
    });
  
    return administrateur;
  };
  