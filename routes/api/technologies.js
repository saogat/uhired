const router = require("express").Router();
const technologiesController = require("../../controllers/technologiesController");

// Matches with "/api/technologies"
router.route("/")
  .get(technologiesController.findAll)
  .post(technologiesController.create);

// Matches with "/api/technologies/:id"
router
  .route("/:id")
  .get(technologiesController.findById)
  .put(technologiesController.update)
  .delete(technologiesController.remove);

module.exports = router;
