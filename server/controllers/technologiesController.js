const db = require("../models");

// Defining methods for the technologiesController
module.exports = {
  findAll: function(req, res) {
    db.Technology.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Technology.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Technology.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Technology.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Technology.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //===================================================
  // Functions to Populate the Resources Table

  getResources: function(req, res) {
    console.log(req.params.id);
    db.Technology.findById(req.params.id)
      .populate("resources")
      .then(dbModel => res.json(dbModel.resources))
      .catch(err => res.status(422).json(err));
  },

  //===================================================
  // Functions to Populate the Jobs Table

  getJobs: function(req, res) {
    console.log(req.params.id);
    console.log("In getJobs TechController")
    db.Technology.findById(req.params.id)
      .populate("jobs")
      .then(dbModel => res.json(dbModel.jobs))
      .catch(err => res.status(422).json(err));
  }
};
