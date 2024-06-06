import { Roboti } from "../models/roboti.model.js";

export async function createRoboti(name) {
  // LOGICA => SERVICE + REPOSITORTY
  const robotiRow = await Roboti.create({ name });

  return robotiRow.dataValues.id;
}
