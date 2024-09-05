import express from "express";
import { google, signup, signOut } from "../controllers/auth.controller.js";
import { signin } from "../controllers/auth.controller.js";

const router = express.Router();
router.post("/signup", signup);
router.post("/signin", signin);
router.post("/google", google);
router.get("/signout", signOut);
export default router;
