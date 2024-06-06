import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";
import { Sesiuni } from "./sesiuni.model.js";

export const Roboti = sequelize.define(
  "Roboti",
  {
    name: {
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
