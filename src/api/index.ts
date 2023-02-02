import { Router } from "express";
import users from "./users/routes";
import categories from "./categories/routes";
import tickets from "./tickets/routes";
import auth from "./auth/routes";
import checkToken from "../middlewares/checkToken";

const router = Router();
router.use("/auth", auth);

router.use(checkToken);
router.use("/users", users);
router.use("/categories", categories);
router.use("/tickets", tickets);

export default router;
