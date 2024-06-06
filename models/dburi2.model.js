import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";
// import { Dburi3 } from "./dburi3.model.js";

export const Dburi2 = sequelize.define(
  "Dburi2",
  {
    info2: {
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
