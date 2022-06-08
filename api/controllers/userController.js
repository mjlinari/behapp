const { User } = require("../models");

class UserController {
  static async getAllUsers(req, res) {
    try {
      const users = await User.findAll();
      res.status(200).send(users);
    } catch (err) {
      console.log("ERROR", err);
    }
  }

  static async register(req, res) {
    try {
      await User.create(req.body);
      res.sendStatus(201);
    } catch (err) {
      console.log("ERROR", err);
    }
  }

  static async getUserById(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      res.status(200).send(user);
    } catch (err) {
      console.log("ERROR", err);
    }
  } 
}

module.exports = UserController;
