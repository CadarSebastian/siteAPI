import { Router } from "express";
import { addNewSesiuni } from "../controllers/sesiuni.controller.js";
const router = Router();
router.post("/", addNewSesiuni);
export default router;
