const db = require("../models");

// Defining methods for the technologiesController
module.exports = {
  findAll: function(req, res) {
    db.Technology
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Technology
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Technology
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Technology
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Technology
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getResources: function(req, res) {
    console.log("in technologies controller");
    console.log(req.params.name);
    db.Technology
    .findById(req.params.name)
    .populate("resources")
    .then(dbModel => res.json(dbModel.resources))
    .catch(err => res.status(422).json(err));
  }
};
