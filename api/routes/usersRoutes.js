const express = require("express")
const router = express.Router()
const {UserController} = require("../controllers")


router.use("/register", UserController.register)
router.use("/getAll", UserController.getAllUsers)
router.use("/:id",UserController.getUserById )
router.use("/:id/update", UserController.updateUser)
router.use("/:id/delete", UserController.deleteUser)

// router.use("/:id/setUsersProfession", UserController.setUsersProfession)
// router.use("/:id/patients/:patientId" , UserController.setPatient)
// router.use("/:id/patients, UserController.getUserPatients")




module.exports = router