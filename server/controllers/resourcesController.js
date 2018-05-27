const db = require("../models");

// Defining methods for the resourcesController
module.exports = {
  findAll: function (req, res) {
    db.Resource
      .find(req.query)
      .sort({
        date: -1
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Resource
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Resource
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Resource
      .findOneAndUpdate({
        _id: req.params.id
      }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Resource
      .findById({
        _id: req.params.id
      })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  share: function (req, res) {
    db.User
      .findByIdAndUpdate(req.body.userId, {
        $push: {
          resources: req.body.resourceId
        }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },


  //===================================================
  // Function to save the Portfolio resource  

  addToPortfolio: function (req, res) {
    console.log(req.body);
    db.User
      .findByIdAndUpdate(req.body.userId, {
        $push: {
          resources: req.body.resourceId
        }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //===================================================
  // Function to Populate the Portfolio Resources Table  

  findPortfolio: function (req, res) {
    db.User
      .findById(req.params.userId)
      .populate("resources")
      .then(
        user => {
          let userResources = user.resources;
          db.Technology
            .findById(req.params.id)
            .populate("resources")
            .then(technology => {
               let result = (userResources.filter(userResource => {
                    let comparison = technology.resources.find(technologyResource => userResource._id.equals(technologyResource._id));
                    return comparison;
                  }));
              res.json(result);
            })
            .catch(err => {
              console.log( "Technology error:", err );
              res.status(422).json(err)
            });
        })
      .catch(err => {
        console.log( "User error:", err );
        res.status(422).json(err)
      });
  },

  //===================================================
  // Functions to Populate the Portfolio Resources Notes  

  note: function (req, res) {
    db.Note
      .create(req.body.note)
      .then(dbNote => {
          db.Resource
            .findByIdAndUpdate(req.body.resourceId, {
                $push: {
                  notes: dbNote._id
                }
             })
          .then(dbModel => res.json(dbModel))
          .catch(
            err => {
              console.log(err);
              res.status(422).json(err)})})
      .catch(err => {
        console.log(err);
        res.status(422).json(err)
      });
    }
};