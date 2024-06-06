import { Router } from "express";
import {
  addNewDburi3,
  deleteDb3,
  getDburi3,
  editDb3,
} from "../controllers/dburi3.controller.js";

const router = Router();
router.post("/", addNewDburi3);
router.delete("/", deleteDb3);
router.get("/", getDburi3);
router.put("/", editDb3);
export default router;
