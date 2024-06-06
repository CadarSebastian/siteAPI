import {
  createCopii,
  deleteOneCopil,
  getAllCopii,
  editOneCopil,
} from "../services/copii.services.js";

export async function addNewCopii(req, res) {
  // LUAREA DATELOR
  const { name, number, SesiuniId } = req.body;

  // VERIFICARI
  if (!name) {
    throw new Error("Name is required");
  }

  // LOGICA => SERVICE + REPOSITORTY
  const copiiId = await createCopii(name, number, SesiuniId);

  // RASPUNS
  res.send(JSON.stringify({ id: copiiId }));
}

export async function deleteCopil(req, res) {
  const { copilId } = req.body;

  if (!copilId) {
    throw new Error("CopilId is required");
  }

  await deleteOneCopil(copilId);

  res.send("Deleted");
}
export async function getCopii(req, res) {
  const dbCopii = await getAllCopii();

  res.send(JSON.stringify(dbCopii));
}

export async function editCopil(req, res) {
  const { copilId, value } = req.body;

  await editOneCopil(copilId, value);

  res.send("Edited");
}
