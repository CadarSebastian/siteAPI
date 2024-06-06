import { sequelize } from "./db.js";

import { Copii } from "./models/copii.model.js";
import { Sesiuni } from "./models/sesiuni.model.js";
import { Roboti } from "./models/roboti.model.js";

sequelize.sync({ alter: true }).then(() => {
  console.log("FINISHED SUCCESS");
  process.exit(0);
});
