const { User, Profession, Patient } = require("../models");

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
  
  /* static async setUsersProfession(req, res) {
    try{
        const profession = await Profession.findByPk(req.body)
        const user = await User.findByPk(req.params.id)
        console.log("profession" , profession)
        res.sendStatus(200)

    }catch(err){
        console.log("ERROR", err)
    }
} */

  static async deleteUser(req, res) {
    try {
      await User.destroy({
        where: {
          id: req.params.id,
        },
      });

      res.sendStatus(200);
    } catch (err) {
      console.log("ERROR", err);
    }
  }

  static async updateUser(req, res) {
    try {
      await User.update(req.body, {
        where: {
          id: req.params.id,
        },
        returning: true,
      });
      res.sendStatus(204);
    } catch (err) {
      console.log("ERROR", err);
    }
  }
}

module.exports = UserController;
