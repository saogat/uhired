const router = require("express").Router();
const accomplishmentsController = require("../../controllers/accomplishmentsController");

// // Matches with "/api/accomplishments"
router.route("/")
  .get(accomplishmentsController.findAll)
  .post(accomplishmentsController.create);

// router.route("/resources/:id")
//   .get(accomplishmentsController.getResources);
 

// // Matches with "/api/accomplishments/:id"
// router
//   .route("/:id")
//   .get(accomplishmentsController.findById)
//   .put(accomplishmentsController.update)
//   .delete(accomplishmentsController.remove);

module.exports = router;