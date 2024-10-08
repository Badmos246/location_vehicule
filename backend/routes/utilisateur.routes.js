module.exports = app => {
    const utilisateur = require("../controllers/utilisateur.controllers.js");
    var router = require("express").Router();
    router.post("/", utilisateur.create);

    router.get("/", utilisateur.findAll);

    router.get("/:id", utilisateur.findOne);

    router.put("/:id", utilisateur.update);

    router.delete("/:id", utilisateur.delete);

    router.delete("/", utilisateur.delletAll);

    app.use('/api/utilisateur', router)
};