const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const loginController = require("../../controllers/loginController");

// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

router.route("/login")
  .post(loginController.login);

module.exports = router;
