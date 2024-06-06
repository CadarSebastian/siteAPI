import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";
import { Roboti } from "./roboti.model.js";

export const Dburi1 = sequelize.define(
  "Dburi1",
  {
    info1: {
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

Roboti.hasOne(Dburi1);
Dburi1.hasOne(Roboti);
