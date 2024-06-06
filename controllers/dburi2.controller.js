import {
  createDburi2,
  deleteOneDb2,
  getAllDburi2,
  editOneDb2,
} from "../services/dburi2.services.js";

export async function addNewDburi2(req, res) {
  // LUAREA DATELOR
  const { info2 } = req.body;

  // VERIFICARI
  if (!info2) {
    throw new Error("info2 is required");
  }

  // LOGICA => SERVICE + REPOSITORTY
  const dburi2Id = await createDburi2(info2);

  // RASPUNS
  res.send(JSON.stringify({ id: dburi2Id }));
}

export async function deleteDb2(req, res) {
  const { db2Id } = req.body;

  if (!db2Id) {
    throw new Error("TaskId is required");
  }

  await deleteOneDb2(db2Id);

  res.send("Deleted");
}
export async function getDburi2(req, res) {
  const dbDburi2 = await getAllDburi2();

  res.send(JSON.stringify(dbDburi2));
}

export async function editDb2(req, res) {
  const { db2Id, value } = req.body;

  await editOneDb2(db2Id, value);

  res.send("Edited");
}
