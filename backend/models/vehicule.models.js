module.exports = (sequelize, Sequelize) => {
    const vehicule = sequelize.define("vehicule", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Nom: {
            type: Sequelize.STRING
        },
        Marque: {
            type: Sequelize.STRING
        },
        Energie: {
            type: Sequelize.STRING
        },
        Prix: {
            type: Sequelize.INTEGER
        },
        images: {
            type: Sequelize.STRING
        },
        rented: {
            type: Sequelize.BOOLEAN
        },
    });

    return vehicule;
}; 