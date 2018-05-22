// Matches with "/api/resources"
router.route("/")
  .get(resourcesController.findAll)
  .post(resourcessController.create);

// Matches with "/api/resources/:id"
router
  .route("/:id")
  .get(resourcesController.findById)
  .put(resourcesController.update)
  .delete(resourcesController.remove);

module.exports = router;