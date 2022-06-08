const express = require("express")
const router = express.Router()
const {ProfessionController} = require("../controllers")

router.use("/newProfession", ProfessionController.createProfession)
router.use("/getAll", ProfessionController.getAllProfessions)
router.use("/:id", ProfessionController.getProfessionById)

module.exports = router