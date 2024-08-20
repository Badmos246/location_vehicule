const db = require("../models");
const Inscription = db.inscription;
const Op = db.sequelize.Op;

exports.connexion = (req, res) => {
  const telephone = req.params.telephone;
  const mdp = req.params.password;

  Inscription.findOne({
    where: {
      Telephone : telephone,
      Password: mdp
    }
  })
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find User with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving User with id=" + id
      });
    });
};

exports.inscription = (req, res) => {
  console.log(req.body);
  if (!req.body.Nom) {
    res.status(400).send({
      message: "content can not be empty!"
    });
    return;
  }
  const Utilisateur = {
    Nom: req.body.Nom,
    Prenom: req.body.Prenom,
    Telephone: req.body.Telephone,
    Date_naissance: req.body.Date_naissance,
    Password: req.body.Password,
    mail: req.body.mail,
  };

  Inscription.create(Utilisateur)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "une erreure, Utilisateur ne peut pas etre creer"
      });
    })
};
