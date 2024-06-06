import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";
// import { Sesiuni } from "./sesiuni.model.js";

export const Copii = sequelize.define(
  "Copii",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    paranoid: false,
  }
);

// Copii.hasOne(Sesiuni);
//Sesiuni.hasMany(Copii);
