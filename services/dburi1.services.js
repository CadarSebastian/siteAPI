import { Dburi1 } from "../models/dburi1.model.js";

export async function createDburi1(info1) {
  // LOGICA => SERVICE + REPOSITORTY
  const dburi1Row = await Dburi1.create({ info1 });

  return dburi1Row.dataValues.id;
}
export async function deleteOneDb1(db1Id) {
  await Dburi1.destroy({
    where: {
      id: db1Id,
    },
  });
}
export async function getAllDburi1() {
  return await Dburi1.findAll({
    attributes: ["id", "info1"],
  });
}
export async function editOneDb1(db1Id, value) {
  const dburi1Row = await Dburi1.findByPk(db1Id);
  dburi1Row.date = value;

  await dburi1Row.save();
}
