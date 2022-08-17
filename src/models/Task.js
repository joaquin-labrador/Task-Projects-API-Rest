import DataType from "sequelize";
import sequelize from "../database/database.js";

export const Task = sequelize.define("task", {
    id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataType.STRING,
    },
    done: {
        type: DataType.BOOLEAN,
        allowNull: true,
    }
}, {
    timestamps: true,
});
