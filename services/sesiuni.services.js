import { Sesiuni } from "../models/sesiuni.model.js";

export async function createSesiuni(date, time) {
  // LOGICA => SERVICE + REPOSITORTY
  const sesiuniRow = await Sesiuni.create({ date, time });

  return sesiuniRow.dataValues.id;
}
export async function deleteOneSesiune(sesiuneId) {
  await Sesiuni.destroy({
    where: {
      id: sesiuneId,
    },
  });
}
export async function getAllSesiuni() {
  return await Sesiuni.findAll({
    attributes: ["id", "date", "time"],
  });
}
