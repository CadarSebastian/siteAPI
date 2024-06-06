import { Roboti } from "../models/roboti.model.js";

export async function createRoboti(name) {
  // LOGICA => SERVICE + REPOSITORTY
  const robotiRow = await Roboti.create({ name });

  return robotiRow.dataValues.id;
}
export async function deleteOneRobot(robotId) {
  await Roboti.destroy({
    where: {
      id: robotId,
    },
  });
}
export async function getAllRoboti() {
  return await Roboti.findAll({
    attributes: ["id", "name"],
  });
}
export async function editOneRobot(robotId, value) {
  const robotiRow = await Roboti.findByPk(robotId);
  robotiRow.date = value;

  await robotiRow.save();
}
