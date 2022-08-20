import 'dotenv/config';
import Express from "express";
import projectsRoutes from "./routes/projects.routes.js";
import tasksRoutes from "./routes/tasks.routes.js";
const app = Express();

app.use(Express.json());
app.use("/api/v1.0/projects", projectsRoutes);
app.use("/api/v1.0/tasks", tasksRoutes);

export default app;