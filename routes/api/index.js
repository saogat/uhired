const router = require("express").Router();
const usersRoutes = require("./users");
const resourcesRoutes = require("./resources");

// Tehnology routes
router.use("/users", usersRoutes);
router.use("/resources", resourcesRoutes);

module.exports = router;
