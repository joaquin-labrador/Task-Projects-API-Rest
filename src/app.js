import Express from "express";
import projectsRoutes from "./routes/projects.routes.js";

const app = Express();

app.use(Express.json());
app.use("/api", projectsRoutes);

export default app;