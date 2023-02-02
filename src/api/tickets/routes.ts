import { Router } from "express";
import ticketsController from "./controller";

const router = Router();

router.get("/", ticketsController.getAll);
router.get("/:id", ticketsController.getOne);
router.post("/", ticketsController.create);
router.delete("/:id", ticketsController.delete_);
router.put("/:id", ticketsController.update);

export default router;
