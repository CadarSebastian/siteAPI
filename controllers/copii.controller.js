import { createCopii } from "../services/copii.services.js";

export async function addNewCopii(req, res) {
  // LUAREA DATELOR
  const { name, number } = req.body;

  // VERIFICARI
  if (!name) {
    throw new Error("Name is required");
  }

  // LOGICA => SERVICE + REPOSITORTY
  const copiiId = await createCopii(name, number);

  // RASPUNS
  res.send(JSON.stringify({ id: copiiId }));
}
