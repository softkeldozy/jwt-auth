import express from "express";
import { authUSer } from "../controller/userController.js";


const router = express.Router();
router.post('/auth', authUSer);

export default router;