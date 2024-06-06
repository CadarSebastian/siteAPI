import { Copii } from "../models/copii.model.js";

export async function createCopii(name, number) {
  // LOGICA => SERVICE + REPOSITORTY
  const copiiRow = await Copii.create({ name, number });

  return copiiRow.dataValues.id;
}
export async function deleteOneCopil(copilId) {
  await Copii.destroy({
    where: {
      id: copilId,
    },
  });
}
export async function getAllCopii() {
  return await Copii.findAll({
    attributes: ["id", "name", "number"],
  });
}
export async function editOneCopil(copilId, value) {
  const copiiRow = await Roboti.findByPk(copilId);
  copiiRow.date = value;

  await copiiRow.save();
}
