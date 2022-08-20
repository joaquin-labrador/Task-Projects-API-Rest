import Project from "../models/Project.js";

const getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    console.log(projects);
    return projects.length > 0 ? res.status(200).send(projects) : res.status(404).send("No projects found");
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

const createProject = async (req, res) => {
  try {
    const { name, priority, description } = req.body;
    const newProject = await Project.create({
      name,
      priority,
      description,
    });

    return newProject ? res.status(200).send(newProject) : res.status(500).send("Error creating project");
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByPk(id);
    if (!project) {
      return res.status(404).send("Project not found");
    }
    project.set(req.body);
    await project.save();
    return res.status(200).send(project);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByPk(id);
    if (!project) {
      return res.status(404).send("Project not found");
    }
    await project.destroy();
    return res.status(204).send("Project deleted");
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByPk(id);
    if (!project) {
      return res.status(404).send("Project not found");
    }
    return res.status(200).send(project);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

export default {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
  getProjectById,
};
