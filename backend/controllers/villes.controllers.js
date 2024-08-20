const db = require("../models");
const Villes = db.villes;
const Op = db.sequelize.Op;

exports.create = (req, res) => {
  console.log(req.body);
  if (!req.body.Nom) {
    res.status(400).send({
      message: "content can not be empty!"
    });
    return;
  }
  const villes = {
    Nom: req.body.Nom,
    Departement: req.body.Departement,
  };

  Villes.create(villes)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "une erreure, Villes ne peut pas etre creer"
      });
    })
};
exports.findOne = (req, res) => {
  const id = req.params.id;

  Villes.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Villes with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Villes with id=" + id
      });
    });
};

exports.findAll = (req, res) => {
  const Nom = req.query.Nom;
  var condition = Nom ? { Nom: { [Op.iLike]: `%${Nom}%` } } : null;

  Villes.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Villes."
      });
    });

};

exports.update = (req, res) => {
  const id = req.params.id;

  Villes.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Villes was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Vehicule with id=${id}. Maybe Villes was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Villes with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Villes.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Villes was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Villes with id=${id}. Maybe vehicule was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Villes with id=" + id
      });
    });

};

exports.delletAll = (req, res) => {
    Villes.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Villes were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Villes."
      });
    });

};

