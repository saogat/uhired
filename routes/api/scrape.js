const router = require("express").Router();
const scrapeController = require("../../controllers/scrapeController");


router.route("/")
  .get(scrapeController.scrape);

module.exports = router;

