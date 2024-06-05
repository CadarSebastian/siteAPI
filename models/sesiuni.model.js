import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";
import { Copii } from "./copii.model.js";

export const Sesiuni = sequelize.define(
  "Sesiuni",
  {
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    paranoid: false,
  }
);

// Sesiuni.hasMany(Copii);
// Copii.belongsTo(Sesiuni);
