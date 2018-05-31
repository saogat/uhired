const db = require("../models");
var jwt = require('jsonwebtoken');
var secret = process.env.JWT_SECRET || ")QA(7WY4Du]Rp~m,a.6=(b!(yx7A3vFUb.|-,i'M"; // super secret

class LoginController {

  constructor() {

  }
  // generate a GUID
  generateGUID = () => {
    return new Date().getTime(); // we can do better with crypto
  }

  generateAndReturnToken = (req, opts) => {
    var GUID = this.generateGUID(); // write/use a better GUID generator in practice
    var token = this.generateToken(req, GUID, opts);
    console.log("Generating token");
    console.log(token);
    return token;
  }

  // create JWT
  generateToken = (req, GUID, opts) => {
    const options = opts || {};

    // By default, expire the token after 7 days.
    // NOTE: the value for 'exp' needs to be in seconds since
    // the epoch as per the spec!
    const expiresDefault = '7d';

    const token = jwt.sign({
      auth: GUID,
      agent: req.headers['user-agent']
    }, secret, {
      expiresIn: options.expires || expiresDefault
    });

    return token;
  }

  // Defining methods for the loginController
  login = (req, res) => {
    console.log("in login controller");
    db.User
      .findOne({
        email: req.body.email,
        password: req.body.password
      })
      .then(dbModel => {
        console.log(dbModel);
        let result = {
          user: dbModel,
          token: this.generateAndReturnToken(req, res)
        };
        res.json(result);
      })
      // else res.status(401).json("Wrong login")})
      .catch(err =>{ 
          console.log(err);
          res.status(422).json(err)});
  }
}
export default LoginController;