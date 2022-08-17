import app from "./app.js";
import morgan from "morgan";
import invalidRoute from "./middleware/404.js";
import sequelize from "./database/database.js";
import './models/Project.js';
import './models/Task.js';

const port = process.env.PORT || 4000;

app.use(morgan("dev"));
app.use(invalidRoute);

async function main() {
  try {
    await sequelize.sync({ force: true });//Sicroniza la base de datos
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();