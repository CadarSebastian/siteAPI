import { createRoboti } from "../services/roboti.services.js";

export async function addNewRoboti(req, res) {
  // LUAREA DATELOR
  const { name } = req.body;

  // VERIFICARI
  if (!name) {
    throw new Error("Name is required");
  }

  // LOGICA => SERVICE + REPOSITORTY
  const robotiId = await createRoboti(name);

  // RASPUNS
  res.send(JSON.stringify({ id: robotiId }));
}
