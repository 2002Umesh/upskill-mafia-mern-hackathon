const User = require("../models/user-model");
const bcrypt = require("bcryptjs");
const home = async (req, res) => {
  try {
    res.status(200).send("Hello World using router");
  } catch (error) {
    console.log(error);
  }
};
const register = async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(400).json({ message: "email already exists" });
    }

    const userCreated = await User.create({firstname, lastname, email, password });

    res.status(200).json({
      msg: "registration successful",
      token: await userCreated.generateToken(),
      userID: userCreated._id.toString(),
    });

    console.log(userCreated)
  } catch (error) {
    res.status(500).json({ message: "internal service error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(401).json({ message: "Invalid Credentials!" });
    }

    const user = await bcrypt.compare(password, userExist.password);

    if (user) {
      res.status(200).json({
        msg: "login successful",
        token: await userExist.generateToken(),
        userID: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid Credentials!" });
    }
  } catch (error) {
    res.status(500).json({ message: "invalid credentials" });
  }
};

const user = async (req, res) => {
  try {
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({ userData });
  } catch (error) {
    res.status(401).json({ message: `error from user route,${error}` });
  }
};

module.exports = { home, register, login, user };
