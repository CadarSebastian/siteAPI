import {
  createDburi1,
  deleteOneDb1,
  getAllDburi1,
  editOneDb1,
} from "../services/dburi1.services.js";

export async function addNewDburi1(req, res) {
  // LUAREA DATELOR
  const { info1, RobotiId } = req.body;

  // VERIFICARI
  if (!info1) {
    throw new Error("info1 is required");
  }

  // LOGICA => SERVICE + REPOSITORTY
  const dburi1Id = await createDburi1(info1, RobotiId);

  // RASPUNS
  res.send(JSON.stringify({ id: dburi1Id }));
}

export async function deleteDb1(req, res) {
  const { db1Id } = req.body;

  if (!db1Id) {
    throw new Error("TaskId is required");
  }

  await deleteOneDb1(db1Id);

  res.send("Deleted");
}
export async function getDburi1(req, res) {
  const dbDburi1 = await getAllDburi1();

  res.send(JSON.stringify(dbDburi1));
}

export async function editDb1(req, res) {
  const { db1Id, value } = req.body;

  await editOneDb1(db1Id, value);

  res.send("Edited");
}
