import { Router } from "express";
import projectsController from "../controller/projects.controller.js";
const router = Router();

router.get("/projects", projectsController.getProjects);
router.post("/projects", projectsController.createProject);
router.put("/projects/:id", projectsController.updateProject);
router.delete("/projects/:id", projectsController.deleteProject);
router.get("/projects/:id", projectsController.getProjectById);

export default router;
