module.exports = (sequelize, Sequelize) => {
    const reservation = sequelize.define("reservation", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nom: {
        type: Sequelize.STRING,
      },
      prenom: {
        type: Sequelize.STRING,
      },
      Telephone: {
        type: Sequelize.INTEGER,
      },
      
      dateDebut: {
        type: Sequelize.DATE,
      },

      dateFin: {
        type: Sequelize.DATE,
      },
      ville: {
        type: Sequelize.STRING,
      },
    
      mail: {
        type: Sequelize.STRING,
      },
   
    });
  
    return reservation;
  };
  