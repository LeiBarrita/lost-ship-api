import { Router } from "express";
import * as helpController from "../controllers/help.controller";

const router = Router();

router.get("/status", helpController.getStatus);
router.get("/repair-bay", helpController.getRepairBay);
router.post("/teapot", helpController.postTeapot);
router.get("/phase-change-diagram", helpController.getPhaseChange);

export default router;
