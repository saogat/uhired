const db = require("../models");
var jwt  = require('jsonwebtoken');
var secret = process.env.JWT_SECRET || ")QA(7WY4Du]Rp~m,a.6=(b!(yx7A3vFUb.|-,i'M"; // super secret


// generate a GUID
function generateGUID() {
  return new Date().getTime(); // we can do better with crypto
}

function generateAndReturnToken(req, opts) {
  console.log("Generating token");
  var GUID   = generateGUID(); // write/use a better GUID generator in practice
  var token  = generateToken(req, GUID, opts);
  return token;
}

  // create JWT
function generateToken(req, GUID, opts) {
  opts = opts || {};

  // By default, expire the token after 7 days.
  // NOTE: the value for 'exp' needs to be in seconds since
  // the epoch as per the spec!
  var expiresDefault = '7d';

  var token = jwt.sign({
    auth:  GUID,
    agent: req.headers['user-agent']
  }, secret, { expiresIn: opts.expires || expiresDefault });

  return token;
}

// Defining methods for the loginController
module.exports = {
  login: function(req, res) {

    res.json(generateAndReturnToken(req, res));

    // db.User
    // .findById(req.params.id)
    // .then(dbModel => res.json(generateAndReturnToken(req, res)))
    // .catch(err => res.status(422).json(err));
  }

};
