import { Dburi1 } from "../models/dburi1.model.js";
import { sequelize } from "../db.js";

export async function createDburi1(info1, RobotiId) {
  const transaction = await sequelize.transaction();
  try {
    const dburi1Row = await Dburi1.create({ info1, RobotiId });
    await transaction.commit();
    return dburi1Row.dataValues.id;
  } catch (error) {
    await transaction.rollback();
  }
  return "error";
}

export async function deleteOneDb1(db1Id) {
  const transaction = await sequelize.transaction();
  try {
    await Dburi1.destroy({
      where: {
        id: db1Id,
      },
    });
    await transaction.commit();
  } catch (error) {
    await transaction.rollback();
  }
}
export async function getAllDburi1() {
  return await Dburi1.findAll({
    attributes: ["id", "info1"],
  });
}
export async function editOneDb1(db1Id, value) {
  const dburi1Row = await Dburi1.findByPk(db1Id);
  dburi1Row.date = value;

  await dburi1Row.save();
}
