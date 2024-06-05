import {
  createSesiuni,
  deleteOneSesiune,
  getAllSesiuni,
  editOneSesiune,
} from "../services/sesiuni.services.js";

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

export async function deleteSesiune(req, res) {
  const { sesiuneId } = req.body;

  if (!sesiuneId) {
    throw new Error("TaskId is required");
  }

  await deleteOneSesiune(sesiuneId);

  res.send("Deleted");
}
export async function getSesiuni(req, res) {
  const dbSesiuni = await getAllSesiuni();

  res.send(JSON.stringify(dbSesiuni));
}

export async function editSesiune(req, res) {
  const { sesiuneId, value } = req.body;

  await editOneSesiune(sesiuneId, value);

  res.send("Edited");
}
