import { Sequelize } from "sequelize";
const db = {
  NAME: "roboti",
  USERNAME: "roboti",
  PASSWORD: "roboti",
  options: {
    dialect: "mysql",
    timezone: "+00:00",
    host: "mysql.roboti",
    port: 3306,
    logging: function (str) {
      console.log(str);
    },
  },
};
export const sequelize = new Sequelize(
  db.NAME,
  db.USERNAME,
  db.PASSWORD,
  db.options
);
