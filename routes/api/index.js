const router = require("express").Router();
const usersRoutes = require("./users");
const scrapeRoutes = require("./scrape.js");


// Tehnology routes
router.use("/users", usersRoutes);
router.use("/scrape", scrapeRoutes);

module.exports = router;
