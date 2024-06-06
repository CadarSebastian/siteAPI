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

export async function deleteRobot(req, res) {
  const { robotId } = req.body;

  if (!robotId) {
    throw new Error("TrobotId is required");
  }

  await deleteOneRobot(robotId);

  res.send("Deleted");
}
export async function getRoboti(req, res) {
  const dbRoboti = await getAllRoboti();

  res.send(JSON.stringify(dbRoboti));
}

export async function editRobot(req, res) {
  const { robotId, value } = req.body;

  await editOneRobot(robotId, value);

  res.send("Edited");
}
