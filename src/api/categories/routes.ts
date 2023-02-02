import { Router } from "express";
import categoriesController from "./controller";

const router = Router();

router.get("/", categoriesController.getAll);
router.get("/:id", categoriesController.getOne);
router.post("/", categoriesController.create);
router.delete("/:id", categoriesController.delete_);
router.put("/:id", categoriesController.update);

export default router;
