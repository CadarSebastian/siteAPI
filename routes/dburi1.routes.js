import { Router } from "express";
import {
  addNewDburi1,
  deleteDb1,
  getDburi1,
  editDb1,
} from "../controllers/dburi1.controller.js";

const router = Router();
router.post("/", addNewDburi1);
router.delete("/", deleteDb1);
router.get("/", getDburi1);
router.put("/", editDb1);
export default router;
