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
      .findByIdAndUpdate(req.body.userId, { $push: { resources: req.body.resourceId } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  portfolio: function(req, res) {
    console.log(req.body);
    db.User
      .findByIdAndUpdate(req.body.userId, {$push: { resources: req.body.resourceId }})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findPortfolio: function(req, res) {
    console.log("in findPortfolio:");
    console.log(req.params.query);
    db.User
      .findById(req.params.query.userId)
      .populate("resources")
      .then(
        dbModel1 => {
          console.log(dbModel1);
          // let userResources = dbModel1.resources;
          // console.log(userResources);
          // db.Technology
          //     .findById(req.params.id)
          //     .populate("resources")
          //     .then(dbModel2 => {
          //           let techResources = dbModel2.resources;
          //           console.log(techResources);
          //           res.json(userResources.filter(each => techResources.includes(ea)));
          //           })
          //     .catch(err => res.status(422).json(err));
                  })
      .catch(err => res.status(422).json(err));
  },

  findPortfolio1: function(req, res) {
    console.log("in findPortfolio:");
    console.log(req.body);
    db.User
      .findById(req.body.userId)
      .populate("resources")
      .then(
        dbModel1 => {
          console.log(dbModel1);
          let userResources = dbModel1.resources;
          console.log(userResources);
          db.Technology
              .findById(req.params.id)
              .populate("resources")
              .then(dbModel2 => {
                    let techResources = dbModel2.resources;
                    console.log(techResources);
                    res.json(userResources.filter(each => techResources.includes(ea)));
                    })
              .catch(err => res.status(422).json(err));
                  })
      .catch(err => res.status(422).json(err));
  }

};
