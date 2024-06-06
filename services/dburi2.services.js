import { Dburi2 } from "../models/dburi2.model.js";

export async function createDburi2(info2) {
  // LOGICA => SERVICE + REPOSITORTY
  const dburi2Row = await Dburi2.create({ info2 });

  return dburi2Row.dataValues.id;
}
export async function deleteOneDb2(db2Id) {
  await Dburi2.destroy({
    where: {
      id: db2Id,
    },
  });
}
export async function getAllDburi2() {
  return await Dburi2.findAll({
    attributes: ["id", "info2"],
  });
}
export async function editOneDb2(db2Id, value) {
  const dburi2Row = await Dburi2.findByPk(db2Id);
  dburi2Row.date = value;

  await dburi2Row.save();
}
