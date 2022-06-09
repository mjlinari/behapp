const express = require("express")
const passport = require("passport")
const router = express.Router()
const {UserController} = require("../controllers")

router.use("/register", UserController.register)
router.use("/login", passport.authenticate("local"), UserController.login )
router.use("/logout", UserController.logout)
router.use("/getAll", UserController.getAllUsers)
router.use("/:id",UserController.getUserById )

module.exports = router