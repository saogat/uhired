const router = require("express").Router();
const usersRoutes = require("./users");
const scrapeRoutes = require("./scrape.js");


// Tehnology routes
router.use("/users", usersRoutes);
router.use("/scrape", scrapeRoutes);
const resourcesRoutes = require("./resources");
const technologies = require("./technologies");

// Tehnology routes
router.use("/users", usersRoutes);
router.use("/resources", resourcesRoutes);
router.use("/technologies", technologies);

module.exports = router;
