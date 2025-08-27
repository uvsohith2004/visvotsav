import express from "express";
import { postForm as postFormController } from "../controllers/form.controller.js";
import { validateForm } from "../middlewares/form.validate.js";
const router = express.Router();
router.post('/',validateForm,postFormController)
export default router;
