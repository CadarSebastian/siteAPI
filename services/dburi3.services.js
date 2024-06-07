import { Dburi3 } from "../models/dburi3.model.js";
import { sequelize } from "../db.js";

export async function createDburi3(info3) {
  const transaction = await sequelize.transaction();
  try {
    const dburi3Row = await Dburi3.create({ info3 });
    await transaction.commit();
    return dburi3Row.dataValues.id;
  } catch (error) {
    await transaction.rollback();
  }
  return "error";
}
export async function deleteOneDb3(db3Id) {
  const transaction = await sequelize.transaction();
  try {
    await Dburi3.destroy({
      where: {
        id: db3Id,
      },
    });
    await transaction.commit();
  } catch (error) {
    await transaction.rollback();
  }
}
export async function getAllDburi3() {
  return await Dburi3.findAll({
    attributes: ["id", "info3"],
  });
}
export async function editOneDb3(db3Id, value) {
  const dburi3Row = await Dburi3.findByPk(db3Id);
  dburi3Row.date = value;

  await dburi3Row.save();
}
