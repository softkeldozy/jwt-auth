import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../utils/genTokens.js'

//? @Auth User/set token
//! @route ---POST/api/users/auth 
//* @access Public
// The async handler makes is possible to handle our errors without wrapping everything in Try-Catch
const authUSer = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id)
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});


//? @Register a new User
//! @route ---POST/api/users  
//* @access Public
const registerUSer = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error(`User with ${email} already exists`);
  }

  const user = await User.create({
    name, email, password,
  });
  if (user) {
    generateToken(res, user._id)
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});


//? @Auth Logout User
//! @route ---POST/api/users/logout 
//* @access Public
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie('Jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "User logged out" });
});


//? @Get User Profile
//! @route ---GET/api/users/profile 
//* @access Private
const getUSerProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User Profile" });
});


//? @User Profile
//! @route ---PUT/api/users/profile 
//* @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update Successful" });
});

export { authUSer, registerUSer, logoutUser, getUSerProfile, updateUserProfile }