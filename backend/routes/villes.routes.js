module.exports = app => {
    const villes = require("../controllers/villes.controllers.js");
    var router = require("express").Router();
    router.post("/", villes.create);

    router.get("/", villes.findAll);

    router.get("/:id", villes.findOne);

    router.put("/:id", villes.update);

    router.delete("/:id", villes.delete);

    router.delete("/", villes.delletAll);

    app.use('/api/villes', router)
};