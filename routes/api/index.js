const router = require("express").Router();
const usersRoutes = require("./user");

// Book routes
router.use("/user", usersRoutes);

module.exports = router;
