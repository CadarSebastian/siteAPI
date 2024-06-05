import { Router } from "express";
import { addNewCopii } from "../controllers/copii.controller.js";
const router = Router();
router.post("/", addNewCopii);
export default router;
