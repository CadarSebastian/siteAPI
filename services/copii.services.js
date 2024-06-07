import { Copii } from "../models/copii.model.js";

export async function createCopii(name, number, SesiuniId) {
  const transaction = await sequelize.transaction();
  try {
    const copiiRow = await Copii.create({ name, number, SesiuniId });
    await transaction.commit();
    return copiiRow.dataValues.id;
  } catch (error) {
    await transaction.rollback();
  }
  return "error";
}
export async function deleteOneCopil(copilId) {
  const transaction = await sequelize.transaction();
  try {
    await Copii.destroy({
      where: {
        id: copilId,
      },
    });
    await transaction.commit();
  } catch (error) {
    await transaction.rollback();
  }
}
export async function getAllCopii() {
  return await Copii.findAll({
    attributes: ["id", "name", "number"],
  });
}
export async function editOneCopil(copilId, value) {
  const transaction = await sequelize.transaction();
  try {
    const copiiRow = await Roboti.findByPk(copilId);
    copiiRow.date = value;

    await copiiRow.save();
  } catch (error) {
    await transaction.rollback();
  }
  return "error";
}
