const { type } = require("os");

module.exports = (sequelize, Sequelize) => {
    const categories = sequelize.define("categories", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
      
        libele: {
            type: Sequelize.STRING
        },
       
    });

    return categories;
}; 