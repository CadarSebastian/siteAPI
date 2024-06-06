import { Router } from "express";
import {
  addNewCopii,
  deleteCopil,
  getCopii,
  editCopil,
} from "../controllers/copii.controller.js";
const router = Router();
router.post("/", addNewCopii);
router.delete("/", deleteCopil);
router.get("/", getCopii);
router.put("/", editCopil);
export default router;
