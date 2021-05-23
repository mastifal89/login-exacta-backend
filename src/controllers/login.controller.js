const Login = require("../models/login.model.js");

let loginController = {
  getLogins: async (req, res) => {
    try {
      const logins = await Login.find();
      res.status(200).json(logins);
    } catch (error) {
      res.status(400).json({
        message: error,
      });
    }
  },
  saveLogin: async (req, res) => {
    const body = req.body;
    console.log(req.body);
    try {
      const savedLogin = await Login.create(body);
      res.status(201).json(savedLogin);
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: err,
      });
    }
  },
  getLogin: async (req, res) => {
    const _id = req.params.id;
    try {
      const login = await Login.findOne({ _id });
      res.status(200).json(login);
    } catch (err) {
      res.status(400).json({
        message: err,
      });
    }
  },
  deleteLogin: async (req, res) => {
    const _id = req.params.id;
    try {
      const removedLogin = await Login.findByIdAndDelete({ _id });

      if (!removedLogin) {
        return res.status(404).json({
          message: err,
        });
      }

      res.json(removedLogin);
    } catch (err) {
      res.status(400).json({
        message: err,
      });
    }
  },
  updateLogin: async (req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
      const updatedLogin = await Login.findByIdAndUpdate(_id, body, {
        new: true,
      });

      if (!updatedLogin) {
        return res.status(404).json({
          message: err,
        });
      }
      res.status(200).json(updatedLogin);
    } catch (err) {
      res.status(500).json({
        message: err,
      });
    }
  },
};

export default loginController;
