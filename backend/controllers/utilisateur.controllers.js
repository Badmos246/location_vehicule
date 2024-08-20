const db = require("../models");
const Utilisateur = db.utilisateur;
const Op = db.sequelize.Op;

exports.create = (req, res) => {
  console.log(req.body);
  if (!req.body.Nom) {
    res.status(400).send({
      message: "content can not be empty!"
    });
    return;
  }
  const utilisateur = {
    Nom: req.body.Nom,
    Prenom: req.body.Prenom,
    Telephone: req.body.Telephone,
    Date_naissance: req.body.Date_naissance,
    Password: req.body.Password,
    mail: req.body.mail,
  };

  Utilisateur.create(utilisateur)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "une erreure, Utilisatteur ne peut pas etre creer"
      });
    })
};
exports.findOne = (req, res) => {
  const id = req.params.id;

  Utilisateur.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Utilisatteur with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Utilisatteur with id=" + id
      });
    });
};

exports.findAll = (req, res) => {
  const Nom = req.query.Nom;
  var condition = Nom ? { Nom: { [Op.iLike]: `%${Nom}%` } } : null;

  Utilisateur.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Utilisatteur."
      });
    });

};

exports.update = (req, res) => {
  const id = req.params.id;

  Utilisateur.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Utilisatteur was updated successfully."
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

  Utilisateur.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Utilisatteur was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Utilisatteur with id=${id}. Maybe vehicule was not found!`
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
    Utilisateur.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Utilisatteur were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Utilisatteur."
      });
    });

};

