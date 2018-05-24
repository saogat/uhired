const router = require("express").Router();
const usersRoutes = require("./users");
const resourcesRoutes = require("./resources");
const technologies = require("./technologies");
// const accomplishments = require("./accomplishments");

// Tehnology routes
router.use("/users", usersRoutes);
router.use("/resources", resourcesRoutes);
router.use("/technologies", technologies);
// router.use("/accomplishments", accomplishments);

module.exports = router;
