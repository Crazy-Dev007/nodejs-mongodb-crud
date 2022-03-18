import express from "express";
const router = express.Router();
import StudentController from "../controller/studentController.js";

// @desc    show all data
// @route   GET /student
router.get("/", StudentController.getAllDoc);

// @desc    submit all data
// @route   POST /student
router.post("/", StudentController.createDoc);

// @desc    edit all data
// @route   GET /edit
// @prams    details id
router.get("/edit/:id", StudentController.editDoc);

// @desc    submit all data
// @route   POST /update
// @prams    details id
router.post("/update/:id", StudentController.updateDocById);

// @desc    submit all data
// @route   POST /edit
// @prams    details id
router.post("/delete/:id", StudentController.deleteDocById);

export default router;
