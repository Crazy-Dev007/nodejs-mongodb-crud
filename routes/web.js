import express from "express";
const router = express.Router();
import StudentController from "../controller/studentController.js";

router.get("/", StudentController.getAllDoc);

export default  router;
