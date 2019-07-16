const db = require("../models");

// Defining methods for the appointmentsController
module.exports = {
  findAll: function(req, res) {
    db.Appointments.find(req.query)
      .then(dbAppointments => res.json(dbAppointments))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Appointments.findById(req.params.id)
      .then(dbAppointments => res.json(dbAppointments))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Appointments.create(req.body)
      .then(dbAppointments => res.json(dbAppointments))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Appointments.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbAppointments => res.json(dbAppointments))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Appointments.findById(req.params.id)
      .then(dbAppointments => dbAppointments.remove())
      .then(dbAppointments => res.json(dbAppointments))
      .catch(err => res.status(422).json(err));
  }
};
