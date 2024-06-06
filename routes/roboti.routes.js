import { Router } from "express";
import {
  addNewRoboti,
  deleteRobot,
  getRoboti,
  editRobot,
} from "../controllers/roboti.controller.js";

const router = Router();
router.post("/", addNewRoboti);
router.delete("/", deleteRobot);
router.get("/", getRoboti);
router.put("/", editRobot);
export default router;
