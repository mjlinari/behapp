const { User, Profession } = require("../models");

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
      !user ? res.sendStatus(404) : res.status(200).send(user);
    } catch (err) {
      console.log("ERROR", err);
    }
  }

  static async login(req, res) {
    try {
      res.status(200).send(req.user);
    } catch (err) {
      console.log(err);
    }
  }

  static async logout(req, res) {
    try {
      await req.logOut();
      res.sendStatus(200);
    } catch (err) {
      console.log(err);
    }
  }

  static async setProfession(req, res) {
    try {
      const user = await User.findByPk(req.params.userId);
      const profession = await Profession.findByPk(req.params.userId);

      await user.setProfession(profession);

      res.status(200).send(profession)
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = UserController;
