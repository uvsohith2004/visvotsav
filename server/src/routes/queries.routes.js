import express from "express";
import { postQuery } from "../controllers/queries.controller.js";
import { validateMessage } from "../middlewares/queries.validate.js";
const router= new express.Router();
router.post('/',validateMessage, postQuery)
export default router