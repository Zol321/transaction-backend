const userModel = require("../Schema/userModel");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  console.log(req);
  const userData = req.body;
  const saltRounds = 10;
  const password = userData.password;
  const hash = bcrypt.hashSync(password, saltRounds);
  const data = { ...userData, password: hash };
  try {
    const response = await userModel.create(data);
    res.send(response);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send({ message: "Internal server error" });
  }
};

const loginUser = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const user = await userModel.findOne({ email: email });
    const hashedPassword = user.password;
    const isUser = bcrypt.compareSync(password, hashedPassword);
    if (isUser) {
      res.status(200).send(user);
    } else {
      res.status(404).send({ message: "check password or email" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { createUser, loginUser };
