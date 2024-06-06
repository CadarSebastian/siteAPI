import { Router } from "express";
import {
  addNewDburi2,
  deleteDb2,
  getDburi2,
  editDb2,
} from "../controllers/dburi2.controller.js";

const router = Router();
router.post("/", addNewDburi2);
router.delete("/", deleteDb2);
router.get("/", getDburi2);
router.put("/", editDb2);
export default router;
