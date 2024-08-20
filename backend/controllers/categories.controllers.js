const db = require("../models");
const Categories = db.categories;
const Op = db.sequelize.Op;

exports.create = (req, res) => {
  console.log(req.body);
  if (!req.body.libele) {
    res.status(400).send({
      message: "content can not be empty!"
    });
    return;
  }
  const categories = {
    utilisateur: req.body.utilisateur,
    vehicule: req.body.vehicule,
  };

  Categories.create(categories)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "une erreure, Categories ne peut pas etre creer"
      });
    })
};
exports.findOne = (req, res) => {
  const id = req.params.id;

  Categories.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Categories with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Categories with id=" + id
      });
    });
};

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  Categories.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Categories."
      });
    });

};

exports.update = (req, res) => {
  const id = req.params.id;

  Categories.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Categories was updated successfully."
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

  Categories.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Categories was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Categories with id=${id}. Maybe vehicule was not found!`
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
    Categories.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Categories were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Categories."
      });
    });

};

exports.findAllPublished = (req, res) => {
    Categories.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Categories."
      });
    });

};