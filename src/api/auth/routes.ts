import { Router } from "express";
import AuthController from "./controller";

const router = Router();

router.post("/signin", AuthController.signin);
router.post("/signup", AuthController.signup);
router.post("/signout", AuthController.signout);
router.post("/me", AuthController.me);

export default router;
