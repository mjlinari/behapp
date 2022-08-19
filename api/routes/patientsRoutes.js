const express = require("express")
const router = express.Router()
const {PatientController} = require("../controllers")

router.post("/newPatient", PatientController.prototype.newPatient)
router.get("/getAllPatients", PatientController.prototype.getAllPatients)
router.get("/:id", PatientController.prototype.getPatient)
router.put("/:id/editPatient", PatientController.prototype.editPatient)



module.exports = router