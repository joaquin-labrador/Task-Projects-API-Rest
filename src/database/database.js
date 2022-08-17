import {Sequelize} from "sequelize";

const sequelize = new Sequelize("TaskAndProducts", "postgres", "mypassword", {
  host: "localhost",
  dialect: "postgres",
});

export default sequelize;
