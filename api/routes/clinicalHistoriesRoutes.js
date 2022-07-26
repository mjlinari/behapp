const express = require("express");
const router = express.Router();
const { ClinicalHistoryController } = require("../controllers");

router.get("/getAll", ClinicalHistoryController.getAllClinicalHistories);
router.post("/createClinicalHistory",  ClinicalHistoryController.createClinicalHistory);
router.get("/:id", ClinicalHistoryController.getById)

module.exports = router;
