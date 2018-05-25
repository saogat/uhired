const router = require("express").Router();
const scrapeController = require("../../controllers/scrapeController");


router.route("/")
  .post(scrapeController.scrape);

module.exports = router;

