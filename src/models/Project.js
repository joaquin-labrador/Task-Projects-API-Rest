import DataType from "sequelize";
import sequelize from "../database/database.js";
import { Task } from "./Task.js";
export const Project = sequelize.define(
  "project",
  {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataType.STRING,
    },
    priority: {
      type: DataType.INTEGER,
    },
    description: {
      type: DataType.STRING,
    },
  },
  {
    timestamps: false,
  }
);
//1 project has many tasks
Project.hasMany(Task, {
  foreignKey: "projectId",
  sourceKey: "id"
});
//1 task belongs to 1 project
Task.belongsTo(Project, {
  foreignKey: "projectId",
  targetKey: "id"
});

export default Project;