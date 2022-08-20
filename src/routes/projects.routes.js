import { Router } from "express";
import projectsController from "../controller/projects.controller.js";
import projectAndTasksController from "../controller/project&tasks.controller.js";
const router = Router();

router.get("/", projectsController.getProjects);
router.post("/", projectsController.createProject);
router.put("/:id", projectsController.updateProject);
router.delete("/:id", projectsController.deleteProject);
router.get("/:id", projectsController.getProjectById);

router.get("/:id/tasks", projectAndTasksController.getTasksByProjectId);

export default router;
