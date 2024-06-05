import { Router } from "express";
import {
  addNewSesiuni,
  deleteSesiune,
} from "../controllers/sesiuni.controller.js";

const router = Router();
router.post("/", addNewSesiuni);
router.delete("/", deleteSesiune);
export default router;
