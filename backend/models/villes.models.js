module.exports = (sequelize, Sequelize) => {
    const villes= sequelize.define("villes", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Nom: {
            type: Sequelize.STRING
        },
        Departement: {
            type: Sequelize.STRING
        },
      
    });

    return villes;
}; 