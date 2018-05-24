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

router.route("/portfolio:query")
  .get(resourcesController.findPortfolio);

module.exports = router;
