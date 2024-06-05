import { Router } from "express";
import {
  addNewSesiuni,
  deleteSesiune,
  getSesiuni,
  editSesiune,
} from "../controllers/sesiuni.controller.js";

const router = Router();
router.post("/", addNewSesiuni);
router.delete("/", deleteSesiune);
router.get("/", getSesiuni);
router.put("/", editSesiune);
export default router;
