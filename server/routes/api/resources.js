const router = require("express").Router();
const resourcesController = require("../../controllers/resourcesController");

// Matches with "/api/resources"
// called by Api.saveResource, get isn't used
router.route("/")
  .get(resourcesController.findAll)
  .post(resourcesController.create);

// Matches with "/api/resources/:id"  - not used
// Not yet called in API
router
  .route("/:id")
  .get(resourcesController.findById)
  .put(resourcesController.update)
  .delete(resourcesController.remove);

// Matches with "/api/resources/share" - not implemented fully
// called by Api.addShare
router.route("/share").post(resourcesController.share);

// Matches with "/api/resources/porfolio" 
// called by Api.addResourceToPortfolio
router.route("/portfolio").post(resourcesController.addToPortfolio);

// Matches with "/api/resources/porfolio" 
// called by Api.getPortfolioResources
router.route("/portfolio/:id/:userId").get(resourcesController.findPortfolio);

// Matches with "/api/resources/porfolio" 
// called by Api.addResourceNote
router.route("/note").post(resourcesController.note);

module.exports = router;