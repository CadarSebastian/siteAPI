import { Sesiuni } from "../models/sesiuni.model.js";

export async function createSesiuni(date, time) {
  const transaction = await sequelize.transaction();
  try {
    const sesiuniRow = await Sesiuni.create({ date, time });
    await transaction.commit();
    return sesiuniRow.dataValues.id;
  } catch (error) {
    await transaction.rollback();
  }
}
return "error";
export async function deleteOneSesiune(sesiuneId) {
  const transaction = await sequelize.transaction();
  try {
    await Sesiuni.destroy({
      where: {
        id: sesiuneId,
      },
    });
    await transaction.commit();
  } catch (error) {
    await transaction.rollback();
  }
}
export async function getAllSesiuni() {
  return await Sesiuni.findAll({
    attributes: ["id", "date", "time"],
  });
}
export async function editOneSesiune(sesiuneId, value) {
  const sesiuniRow = await Sesiuni.findByPk(sesiuneId);
  sesiuniRow.date = value;

  await sesiuniRow.save();
}
