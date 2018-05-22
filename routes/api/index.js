const router = require("express").Router();
const usersRoutes = require("./users");

// Tehnology routes
router.use("/users", usersRoutes);

module.exports = router;
