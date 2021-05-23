import express from "express";
const router = express.Router();
import LoginController from "../controllers/login.controller";

router.post("/save-login", LoginController.saveLogin);
router.get("/login/:id", LoginController.getLogin);
router.get("/logins", LoginController.getLogins);
router.put("/update-login/:id", LoginController.updateLogin);
router.delete("/delete-login/:id", LoginController.deleteLogin);

export default router;
