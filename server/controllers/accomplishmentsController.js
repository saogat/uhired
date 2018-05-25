const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Accomplishment
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Accomplishment
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("In Accomplishment create");
    console.log(req.body.userId);
    db.Resource
      .create(req.body.accomplishment)
      .then(resource => {
        db.User
        .findByIdAndUpdate(req.body.userId, {
          $push: {
            accomplishments: resource._id
          }})
          .then(
            db.Technology
            .findByIdAndUpdate(req.body.technologyId, {
              $push: {
                resources: resource._id
              }})
              .then(res.json(resource))
              .catch(err => res.status(422).json(err))
          )
          .catch(err => res.status(422).json(err));
      })
      .catch(err => {
          console.log(err);
          res.status(422).json(err)});
  },
  update: function(req, res) {
    db.Accomplishment
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Accomplishment
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
