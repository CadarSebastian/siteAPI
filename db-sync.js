import { sequelize } from "./db.js";

import { Copii } from "./models/copii.model.js";
import { Sesiuni } from "./models/sesiuni.model.js";
import { Roboti } from "./models/roboti.model.js";
import { Dburi1 } from "./models/dburi1.model.js";
import { Dburi2 } from "./models/dburi2.model.js";

sequelize.sync({ alter: true }).then(() => {
  console.log("FINISHED SUCCESS");
  process.exit(0);
});
