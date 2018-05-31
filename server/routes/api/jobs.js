const router = require("express").Router();
const jobsController = require("../../controllers/jobsController");

// Matches with /api/jobs
// router.route("/")
//   .get(jobsController.findAll)
//   .post(jobsController.create);

// // Matches with /api/jobs/:id
// router
//   .route("/:id")
//   .get(jobsController.findById)
//   .put(jobsController.update)
//   .delete(jobsController.remove);

// Matches with /api/jobs/share
// router.route("/share").post(jobsController.share);

// Matches with "/api/jobs/portfolio" 
// called by Api.addJobToPortfolio
router.route("/portfolio").post(jobsController.addToPortfolio);

// Matches with "/api/jobs/portfolio/:id:/userId" 
// called by Api.getPortfolioJobs
router.route("/portfolio/:id/:userId").get(jobsController.findPortfolio);

// Matches with "/api/resources/porfolio" 
// called by Api.addJobNote
router.route("/note").post(jobsController.note);

module.exports = router;