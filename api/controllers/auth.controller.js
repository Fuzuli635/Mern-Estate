import User from "../models/user.model.js";
import bcryptjs from "bcrypt";
export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json("User Created Succsessfully...");
  } catch (error) {
    next(error);
  }
};
