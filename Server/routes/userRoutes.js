import express from "express";
import { authUSer, registerUSer, logOutUser, getUSerProfile, updateUserProfile } from "../controller/userController.js";


const router = express.Router();

router.post('/', registerUSer);
router.post('/auth', authUSer);
router.post('/logout', logOutUser);
router.route('/profile').get(getUSerProfile).put(updateUserProfile);

export default router;