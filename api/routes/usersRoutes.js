const express = require("express")
const passport = require("passport")
const router = express.Router()
const {UserController} = require("../controllers")

router.post("/register", UserController.register)
router.post("/login", passport.authenticate("local"), UserController.login )
router.post("/logout", UserController.logout)
router.get("/getAll", UserController.getAllUsers)
router.get("/:id",UserController.getUserById )


module.exports = router