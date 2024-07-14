import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
// @desc Auth user/set token
// route POST /api/users/auth
// @access Public

const authUser = asnycHandler(async (req, res) => {
    res.status(200).json({ message: 'Auth User'});
    throw new Error('Something went wrong')

});

// @desc Auth user/set token
// route POST /api/users
// @access Public


const registerUser = asnycHandler(async (req, res) => {
    res.status(200).json({ message: 'Register User'});
});
// @desc Auth user/set token
// route POST /api/users/logout
// @access Public

const logoutUser = asnycHandler(async (req, res) => {
    res.status(200).json({ message: 'Logout User'});

});

// @desc Get user profile
// route GET /api/users/profile
// @access Public

const getUserProfile = asnycHandler(async (req, res) => {
    res.status(200).json({ message: 'User Profile' });

});
// @desc Update user profile
// route PUT /api/users/profile
// @access Private

const updateUserProfile = asnycHandler(async (req, res) => {
    res.status(200).json({ message: 'Update user Profile' });

});

export {authUser, registerUser, logoutUser, getUserProfile, updateUserProfile};