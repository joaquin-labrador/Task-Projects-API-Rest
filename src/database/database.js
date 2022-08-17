import {Sequelize} from "sequelize";

const sequelize = new Sequelize("postgresDB", "postgres", "12345678", {
  host: "localhost",
  dialect: "postgres",
});

export default sequelize;
