module.exports = app => {
    const administrateur = require("../controllers/administrateur.controllers.js");
    var router = require("express").Router();
    router.post("/", administrateur.create);

    router.get("/", administrateur.findAll);

    router.get("/:id", administrateur.findOne);

    router.put("/:id", administrateur.update);

    router.delete("/:id", administrateur.delete);

    router.delete("/", administrateur.delletAll);

    app.use('/api/administrateur', router)
};