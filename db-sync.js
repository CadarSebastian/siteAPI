import { sequelize } from "./db.js";

import { Copii } from "./models/copii.model.js";
import { Sesiuni } from "./models/sesiuni.model.js";

sequelize.sync({ force: true }).then(() => {
  console.log("FINISHED SUCCESS");
  process.exit(0);
});
