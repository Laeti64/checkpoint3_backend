import { Router } from "express";
import AuthController from "./controller";

const router = Router();

router.post("/auth/signin", AuthController.signin);
router.post("/auth/signup", AuthController.signup);
router.post("/auth/signout", AuthController.signout);
