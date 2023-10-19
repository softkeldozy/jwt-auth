import asyncHandler from 'express-async-handler';

//? @Auth User/set token
//! @route ---POST/api/users/auth 
//* @access Public

// ! The async handler makes is possible to handle our errors without wrapping everything in Try-Catch
const authUSer = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "success" });
});



export { authUSer }