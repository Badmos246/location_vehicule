const { type } = require("os");

module.exports = (sequelize, Sequelize) => {
    const location = sequelize.define("location", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
       Date_location: {
         type:Sequelize.DATE,
       },
        Prix: {
            type: Sequelize.INTEGER
        },
       
    });

    return location;
}; 