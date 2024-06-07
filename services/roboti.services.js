import { Roboti } from "../models/roboti.model.js";
import { sequelize } from "../db.js";

export async function createRoboti(name) {
  const transaction = await sequelize.transaction();
  try {
    const robotiRow = await Roboti.create({ name });
    await transaction.commit();
    return robotiRow.dataValues.id;
  } catch (error) {
    await transaction.rollback();
  }
  return "error";
}
export async function deleteOneRobot(robotId) {
  const transaction = await sequelize.transaction();
  try {
    await Roboti.destroy({
      where: {
        id: robotId,
      },
    });
    await transaction.commit();
  } catch (error) {
    await transaction.rollback();
  }
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
