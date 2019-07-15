const db = require("../models");

// Defining methods for the barberController
module.exports = {
  findAll: function(req, res) {
    db.Barber.find(req.query)
      .then(dbBarber => res.json(dbBarber))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Barber.findById(req.params.id)
      .then(dbBarber => res.json(dbBarber))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Barber.create(req.body)
      .then(dbBarber => res.json(dbBarber))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Barber.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbBarber => res.json(dbBarber))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Barber.findById(req.params.id)
      .then(dbBarber => dbBarber.remove())
      .then(dbBarber => res.json(dbBarber))
      .catch(err => res.status(422).json(err));
  }
};