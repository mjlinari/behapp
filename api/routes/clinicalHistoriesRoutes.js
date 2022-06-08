const express = require("express");
const router = express.Router();
const { ClinicalHistoryController } = require("../controllers");

router.use("/getAll", ClinicalHistoryController.getAllClinicalHistories);
router.use("/createClinicalHistory",  ClinicalHistoryController.createClinicalHistory);

module.exports = router;
