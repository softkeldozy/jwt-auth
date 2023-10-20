import express from "express";
import { authUSer, registerUSer, logoutUser, getUSerProfile, updateUserProfile } from "../controller/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post('/', registerUSer);
router.post('/auth', authUSer);
router.post('/logout', logoutUser);
router.route('/profile').get(protect, getUSerProfile).put(protect, updateUserProfile);

export default router;