const db = require("../models");

// Defining methods for the availabilitiesController
module.exports = {
  findAll: function(req, res) {
    db.Availabilities.find(req.query)
      .then(dbAvailabilities => res.json(dbAvailabilities))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Availabilities.findById(req.params.id)
      .then(dbAvailabilities => res.json(dbAvailabilities))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Availabilities.create(req.body)
      .then(dbAvailabilities => res.json(dbAvailabilities))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Availabilities.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbAvailabilities => res.json(dbAvailabilities))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Availabilities.findById(req.params.id)
      .then(dbAvailabilities => dbAvailabilities.remove())
      .then(dbAvailabilities => res.json(dbAvailabilities))
      .catch(err => res.status(422).json(err));
  }
};
