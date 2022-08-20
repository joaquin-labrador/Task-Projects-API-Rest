import { Router } from "express";
import taskController from "../controller/tasks.controller.js";

const router = Router();

router.get("/", taskController.getTasks);
router.post("/", taskController.createTask);
router.put("/:id", taskController.updateTask);
router.delete("/:id", taskController.deleteTask);
router.get("/:id", taskController.getTaskById);

export default router;
