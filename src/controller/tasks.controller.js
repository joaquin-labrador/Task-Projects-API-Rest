import { Task } from "../models/Task.js";

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    console.log(tasks);
    return tasks.length > 0
      ? res.status(200).send(tasks)
      : res.status(404).send("No tasks found");
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const createTask = async (req, res) => {
  try {
    const { name, done, projectId } = req.body;
    const newTask = await Task.create({
      name,
      done,
      projectId,
    });

    return newTask
      ? res.status(200).send(newTask)
      : res.status(500).send("Error creating task");
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).send("Task not found");
    }
    task.set(req.body);
    await task.save();
    return res.status(200).send("Update : " , task);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).send("Task not found");
    }
    await task.destroy();
    return res.status(204).send("Task deleted");
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const getTaskById = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByPk(id);
    return task
      ? res.status(200).send(task)
      : res.status(404).send("Task not found");
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export default { getTasks, createTask, updateTask, deleteTask, getTaskById };
