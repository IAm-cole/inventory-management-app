import { User } from "../models/user.model.js";

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
     console.log("Backend received request!");
     console.log("Request body:", req.body);

    if (!username || !email || !password) {
      return res.status(400).json({
        message: "All field are important",
      });
    }
    //check existing user

    const existingEmail = await User.findOne({ email: email.toLowerCase() });
    if (existingEmail) {
      return res.status(400).json({ message: "email already exists!" });
    }

    const existingUsername = await User.findOne({
      username: username.toLowerCase(),
    });
    if (existingUsername) {
      return res.status(400).json({ message: "Username already exists!" });
    }

    //create user after validation pass

    const user = await User.create({
      username: username.toLowerCase(),
      email: email.toLowerCase(),
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

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email.toLowerCase() });

    if (!user)
      return res.status(400).json({
        message: "User not found",
      });

    // compare password
    const isMatch = await user.comparePassword(password);
    if (!isMatch)
      return res.status(400).json({
        message: "invalid credentials",
      });

    res.status(200).json({
      message: "user login sucessfully",
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
      },
    });
  } catch (error) {
    console.log("Login error:", error);
    res.status(500).json({
      message: "Internal server error",
      detail: error.message,
    });
  }
};

const logoutUser = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user)
      return res.status(400).json({
        message: "User not found",
      });

    res.status(200).json({
      message: "User logged out successfully",
    });
  } catch (error) {
    console.log("Logout error:", error);
    res.status(500).json({
      message: "Internal server error",
      detail: error.message,
    });
  }
};

export {
  registerUser,
  loginUser,
  logoutUser,
};
