import { Router } from "express";
import usersController from "./controller";

const router = Router();

router.get("/", usersController.getAll);
router.get("/:id", usersController.getOne);
router.delete("/:id", usersController.delete_);
router.put("/:id", usersController.update);

export default router;
