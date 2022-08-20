import { Task } from "../models/Task.js";

const getTasksByProjectId = async (req, res) => {
    try {
        const { id } = req.params;
        const tasks = await Task.findAll({
            where: { projectId: id },
        })
        return tasks.length > 0 ? res.status(200).send(tasks) : res.status(404).json({ message: "Project don't have tasks" });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

export default { getTasksByProjectId }

