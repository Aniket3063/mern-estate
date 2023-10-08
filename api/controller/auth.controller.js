import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jsonwebtoken from "jsonwebtoken";

// sign-up api route
export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const encryptedpassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: encryptedpassword });

  try {
    await newUser.save();
    res.status(201).json("User created successfully");
  } catch (error) {
    next(error);
  }
};

// sign-in api route
export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    // valid user verification
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User Not found"));
    const validPassword = bcryptjs.compareSync(
      password,
      validUser.password
    );
    if (!validPassword)
      return next(errorHandler(401, "Invalid Credentials. !!"));


    // creating a unique token using jsonwebtoken package to store into cookie 
    const token = jsonwebtoken.sign(
      { id: validUser._id },
      process.env.JSONWEBTOKEN_SECRET
    );
    const {password:pass, ...rest} = validUser._doc;
    res
      .cookie("access_token", token, { httpOnly: true }) // cookie to be stored in local browser
      .status(200)
      .json(rest); // rest is the valid user credential without password 
  } catch (error) {
    next(error);
  }
};
