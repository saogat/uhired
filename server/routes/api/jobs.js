const router = require("express").Router();
const loginController = require("../../controllers/resourcesController");
const jobsController = require("../../controllers/jobsController");

// Matches with /api/jobs
router.route("/")
  .get(jobsController.findAll)
  .post(jobsController.create);

// Matches with /api/jobs/:id
router
  .route("/:id")
  .get(jobsController.findById)
  .put(jobsController.update)
  .delete(jobsController.remove);

// Matches with /api/jobs/share
router.route("/share")
  .post(jobsController.share);

// Matches with "/api/jobs/:id" 
// called by Api.addJobsToPortfolio
router.route("/portfolio").post(jobsController.portfolio);

// called by Api.
router.route("/portfolio/:id/:userId").get(jobsController.findPortfolio);

module.exports = router;