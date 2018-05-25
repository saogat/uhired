const router = require("express").Router();
const loginController = require("../../controllers/resourcesController");
const resourcesController = require("../../controllers/resourcesController");

// Matches with "/api/resources"
router.route("/")
  .get(resourcesController.findAll)
  .post(resourcesController.create);

// Matches with "/api/resources/:id"
router
  .route("/:id")
  .get(resourcesController.findById)
  .put(resourcesController.update)
  .delete(resourcesController.remove);

router.route("/share")
  .post(resourcesController.share);

router.route("/portfolio")
  .post(resourcesController.portfolio);

router.route("/portfolio/:id/:userId")
  .get(resourcesController.findPortfolio);

  router.route("/note")
  .post(resourcesController.note);

module.exports = router;