import { Router } from "express";
import {
  addNewSesiuni,
  deleteSesiune,
  getSesiuni,
} from "../controllers/sesiuni.controller.js";

const router = Router();
router.post("/", addNewSesiuni);
router.delete("/", deleteSesiune);
router.get("/", getSesiuni);
export default router;
