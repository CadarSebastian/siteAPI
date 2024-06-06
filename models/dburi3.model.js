import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";
import { Dburi2 } from "./dburi2.model.js";

export const Dburi3 = sequelize.define(
  "Dburi3",
  {
    info3: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    paranoid: false,
  }
);

// Dburi2.belongsToMany(Dburi3);
// Dburi3.belongsToMany(Dburi2);
