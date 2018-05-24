const router = require("express").Router();
const loginController = require("../../controllers/resourcesController");
const jobsController = require("../../controllers/jobsController");

// Matches with "/api/resources"
router.route("/")
  .get(jobsController.findAll)
  .post(jobsController.create);

// Matches with "/api/resources/:id"
router
  .route("/:id")
  .get(jobsController.findById)
  .put(jobsController.update)
  .delete(jobsController.remove);

router.route("/share")
  .post(jobsController.share);

router.route("/portfolio")
  .post(jobsController.portfolio);

router.route("/portfolio/:id/:userId")
  .get(jobsController.findPortfolio);

module.exports = router;