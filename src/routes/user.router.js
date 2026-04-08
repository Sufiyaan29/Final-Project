import { Router } from "express";
import { registerUser } from "../controllers/user.controller";

const router = express()

router.route("/register").post(registerUser)
router.route("/login").post(login)
export default router