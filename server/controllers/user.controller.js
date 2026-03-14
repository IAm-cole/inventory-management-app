import { User } from "../models/user.model.js";

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        message: "All field are important",
      });
    }
    //check existing user

    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) {
      return res.status(400).json({ message: "user already exists!" });
    }

    //create user after validation pass

    const user = await User.create({
      username,
      email: toLowercase,
      password,
      loggedIn: false,
    });
    res.status(201).json({
      message: "User registered successfully",
      user: { id: user._id, email: user.email, username: user.username },
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      error: error.message,
    });
  }
};

export { registerUser };
