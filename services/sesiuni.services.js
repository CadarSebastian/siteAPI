import { Sesiuni } from "../models/sesiuni.model.js";

export async function createsesiuni(date, time) {
  // LOGICA => SERVICE + REPOSITORTY
  const sesiuniRow = await Sesiuni.create({ date, time });

  return sesiuniRow.dataValues.id;
}
