import { Dburi3 } from "../models/dburi3.model.js";

export async function createDburi3(info3) {
  // LOGICA => SERVICE + REPOSITORTY
  const dburi3Row = await Dburi3.create({ info3 });

  return dburi3Row.dataValues.id;
}
export async function deleteOneDb3(db3Id) {
  await Dburi3.destroy({
    where: {
      id: db3Id,
    },
  });
}
export async function getAllDburi3() {
  return await Dburi3.findAll({
    attributes: ["id", "info3"],
  });
}
export async function editOneDb3(db3Id, value) {
  const dburi3Row = await Dburi3.findByPk(db3Id);
  dburi3Row.date = value;

  await dburi3Row.save();
}
