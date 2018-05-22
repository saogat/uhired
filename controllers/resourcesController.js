const db = require("../models");

// Defining methods for the resourcesController
module.exports = {
  findAll: function(req, res) {
    db.Resource
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Resource
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Resource
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Resource
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Resource
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  share: function(req, res) {
    db.User
      .find({email: req.query.emailId}, { $push: { resources: req.query.id } }, { new: true })
      .then(dbModel => res.json(dbModel))
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
