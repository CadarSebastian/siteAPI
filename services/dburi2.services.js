import { Dburi2 } from "../models/dburi2.model.js";

export async function createDburi2(info2) {
  const transaction = await sequelize.transaction();
  try {
    const dburi2Row = await Dburi2.create({ info2 });
    await transaction.commit();
    return dburi2Row.dataValues.id;
  } catch (error) {
    await transaction.rollback();
  }
  return "error";
}
export async function deleteOneDb2(db2Id) {
  const transaction = await sequelize.transaction();
  try {
    await Dburi2.destroy({
      where: {
        id: db2Id,
      },
    });
    await transaction.commit();
  } catch (error) {
    await transaction.rollback();
  }
}
export async function getAllDburi2() {
  return await Dburi2.findAll({
    attributes: ["id", "info2"],
  });
}
export async function editOneDb2(db2Id, value) {
  const dburi2Row = await Dburi2.findByPk(db2Id);
  dburi2Row.date = value;

  await dburi2Row.save();
}
