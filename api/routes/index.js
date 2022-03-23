const express = require("express");
const router = express.Router();
const usersRoutes = require("./usersRoutes");
const adminRoutes = require("./adminRoutes");
const patientsRoutes = require("./patientsRoutes");
const clinicalHistoriesRoutes = require("./clinicalHistoriesRoutes");
const professionsRoutes = require("./professionsRoutes")

router.use("/users", usersRoutes);
router.use("/admin", adminRoutes);
router.use("/patients", patientsRoutes);
router.use("/clicalHistories", clinicalHistoriesRoutes);
router.use("/professions", professionsRoutes)

module.exports = router;
