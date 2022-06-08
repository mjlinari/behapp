const express = require("express")
const router = express.Router()
const {UserController} = require("../controllers")

router.use("/register", UserController.register)
router.use("/getAll", UserController.getAllUsers)
router.use("/:id",UserController.getUserById )

module.exports = router