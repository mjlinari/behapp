const express = require("express")
const router = express.Router()
const {ProfessionController} = require("../controllers")

router.post("/newProfession", ProfessionController.createProfession)
router.get("/getAll", ProfessionController.getAllProfessions)
router.get("/:id", ProfessionController.getProfessionById)

module.exports = router