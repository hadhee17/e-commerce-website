const User = require("../model/user");
const { createToken } = require("../middleware/jwt");
const AppError = require("../utils/appError");

exports.signup = async (req, res, next) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    });

    createToken(newUser, 201, res);
  } catch (error) {
    next(new AppError(`signup error: ${error}`));
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError("Please provide email and password"));
  }
};
