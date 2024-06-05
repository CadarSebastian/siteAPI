import { Copii } from "../models/copii.model.js";

export async function createCopii(name, number) {
  // LOGICA => SERVICE + REPOSITORTY
  const copiiRow = await Copii.create({ name, number });

  return copiiRow.dataValues.id;
}
