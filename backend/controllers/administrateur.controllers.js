const db = require("../models");
const Administrateur = db.administrateur;
const Op = db.sequelize.Op;

exports.create = (req, res) => {
  console.log(req.body);
  if (!req.body.Nom) {
    res.status(400).send({
      message: "content can not be empty!"
    });
    return;
  }
  const administrateur = {
    Nom: req.body.Nom,
    Prenom: req.body.Prenom,
    Telephone: req.body.Telephone,
    Password: req.body.Password,
  };

  Administrateur.create(administrateur)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "une erreure, administrateur ne peut pas etre creer"
      });
    })
};
exports.findOne = (req, res) => {
  const id = req.params.id;

  administrateur.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find administrateur with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving administrateur with id=" + id
      });
    });
};

exports.findAll = (req, res) => {
  const Nom = req.query.Nom;
  var condition = Nom ? { Nom: { [Op.iLike]: `%${Nom}%` } } : null;

  administrateur.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving administrateur."
      });
    });

};

exports.update = (req, res) => {
  const id = req.params.id;

  administrateur.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "administrateur was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update administrateur with id=${id}. Maybe administrateur was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating administrateur with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  administrateur.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "administrateur was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete administrateur with id=${id}. Maybe administrateur was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete administrateur with id=" + id
      });
    });

};

exports.delletAll = (req, res) => {
    administrateur.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} administrateur were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all administrateur."
      });
    });

};

