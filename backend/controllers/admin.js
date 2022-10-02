const Admin = require("../models/admin");
const bcrypt = require("bcrypt");
const { generateToken } = require("../helpers/token");

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });
    if (!admin)
      return res.status(400).json({ message: "You are not authorized" });
    const check = await bcrypt.compare(password, admin.password);
    if (!check)
      return res.status(400).json({ message: "Bad Credentials Enterred" });
    const token = generateToken({ id: admin._id.toString() }, "7d");
    res.send({
      id: admin._id,
      username: admin.username,
      token: token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
