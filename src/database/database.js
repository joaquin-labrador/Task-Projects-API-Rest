import * as dotenv from 'dotenv';
dotenv.config();
import { Sequelize } from "sequelize";
console.log(process.env.DB_NAME);

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "postgres",
  });

export default sequelize;
