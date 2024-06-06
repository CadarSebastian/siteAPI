import {
  createDburi3,
  deleteOneDb3,
  getAllDburi3,
  editOneDb3,
} from "../services/dburi3.services.js";

export async function addNewDburi3(req, res) {
  // LUAREA DATELOR
  const { info3 } = req.body;

  // VERIFICARI
  if (!info3) {
    throw new Error("info3 is required");
  }

  // LOGICA => SERVICE + REPOSITORTY
  const dburi3Id = await createDburi3(info3);

  // RASPUNS
  res.send(JSON.stringify({ id: dburi3Id }));
}

export async function deleteDb3(req, res) {
  const { db3Id } = req.body;

  if (!db3Id) {
    throw new Error("TaskId is required");
  }

  await deleteOneDb3(db3Id);

  res.send("Deleted");
}
export async function getDburi3(req, res) {
  const dbDburi3 = await getAllDburi3();

  res.send(JSON.stringify(dbDburi3));
}

export async function editDb3(req, res) {
  const { db3Id, value } = req.body;

  await editOneDb3(db3Id, value);

  res.send("Edited");
}
