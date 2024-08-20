const db = require("../models");
const Vehicule = db.vehicule;
const Op = db.sequelize.Op;

exports.create = (req, res) => {
  console.log(req.body);
  if (!req.body.Nom) {
    res.status(400).send({
      message: "content can not be empty!"
    });
    return;
  }
  const vehicule = {
    Nom: req.body.Nom,
    Marque: req.body.Marque,
    Energie: req.body.Energie,
    Prix: req.body.Prix,
    images: req.body.images,
    rented: req.body.rented ? req.body.rented : false,
  };

  Vehicule.create(vehicule)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "une erreure, le vehicule ne peut pas etre creer"
      });
    })
};
exports.findOne = (req, res) => {
  const id = req.params.id;

  Vehicule.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Vehicule with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving vehicule with id=" + id
      });
    });
};

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  Vehicule.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving vehicule."
      });
    });

};

exports.update = (req, res) => {
  const id = req.params.id;

  Vehicule.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Vehicule was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Vehicule with id=${id}. Maybe Vehicule was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Vehicule with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Vehicule.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Vehicule was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Vehicule with id=${id}. Maybe vehicule was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Vehicule with id=" + id
      });
    });

};

exports.delletAll = (req, res) => {
  Vehicule.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Vehicule were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Vehicule."
      });
    });

};

exports.findOneRented = (req, res) => {
  const id = req.params.id;

  Rented.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Rented with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Rented with id=" + id
      });
    });
};

exports.findAllRented = (req, res) => {
  Vehicule.findAll({ where: { rented: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving vehicule."
      });
    });

};