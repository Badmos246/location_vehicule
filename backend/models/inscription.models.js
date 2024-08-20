module.exports = (sequelize, Sequelize) => {
    const inscription = sequelize.define("inscription", {
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
      Date_naissance: {
        type: Sequelize.DATE,
      },
      mail: {
        type: Sequelize.STRING,
      },
      Password: {
          type: Sequelize.STRING,
        },
    });
  
    return inscription;
  };
  