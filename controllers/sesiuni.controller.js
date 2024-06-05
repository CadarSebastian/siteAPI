import { createSesiuni } from "../services/sesiuni.services.js";

export async function addNewSesiuni(req, res) {
  // LUAREA DATELOR
  const { date, time } = req.body;

  // VERIFICARI
  if (!date) {
    throw new Error("Date is required");
  }

  // LOGICA => SERVICE + REPOSITORTY
  const sesiuniId = await createSesiuni(date, time);

  // RASPUNS
  res.send(JSON.stringify({ id: sesiuniId }));
}
