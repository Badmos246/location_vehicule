module.exports = app => {
    const controller = require("../controllers/auth.controllers.js");
    var router = require("express").Router();
    router.post("/inscription", controller.inscription);

    router.get("/connexion", controller.connexion);

    app.use('/api/auth', router)
};