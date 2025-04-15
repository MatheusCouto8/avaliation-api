import express from "express";
import avaliationController from "../controllers/avaliationController.js";
const router = express.Router();
router.get("/", avaliationController.getAll);
router.post("/", avaliationController.create);
router.put("/:id", avaliationController.update);
router.delete("/:id", avaliationController.delete);
export default router;
