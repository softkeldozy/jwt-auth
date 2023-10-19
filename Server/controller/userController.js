import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';


//? @Auth User/set token
//! @route ---POST/api/users/auth 
//* @access Public

// ! The async handler makes is possible to handle our errors without wrapping everything in Try-Catch
const authUSer = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Login Successful" });
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
const logOutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Logged Out" });
});


//? @Get User Profile
//! @route ---GET/api/users/profile 
//* @access Private
const getUSerProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User Profile" });
});


//? @Auth User/set token
//! @route ---PUT/api/users/profile 
//* @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update Successful" });
});

export { authUSer, registerUSer, logOutUser, getUSerProfile, updateUserProfile }