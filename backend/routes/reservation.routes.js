module.exports = app => {
    const reservation = require("../controllers/reservation.controllers.js");
    var router = require("express").Router();
    router.post("/", reservation.create);

    router.get("/", reservation.findAll);
    
    router.get("/:id", reservation.findOne);

    router.put("/:id", reservation.update);

    router.delete("/:id", reservation.delete);
 
    router.delete("/", reservation.delletAll);

    app.use('/api/reservation', router)
};