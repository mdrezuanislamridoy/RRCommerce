const User = require("../model/User");

const bcrypt = require("bcrypt");

const postUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10); // Hash password with bcrypt

    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      type: req.body.type,
    });

    await newUser.save();

    res.status(200).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error saving user" });
  }
};

const checkLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: "Invalid password" });
    }

    res.status(202).json({ message: "Login successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { postUser, checkLogin };
