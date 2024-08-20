module.exports = app => {
    const vehicule = require("../controllers/vehicule.controllers.js");
    var router = require("express").Router();
    router.post("/", vehicule.create);

    router.get("/", vehicule.findAll);

    router.get("/rented", vehicule.findAllRented);

    router.get("/:id", vehicule.findOne);

    router.put("/:id", vehicule.update);

    router.delete("/:id", vehicule.delete);

    router.delete("/", vehicule.delletAll);

    app.use('/api/vehicule', router)
};