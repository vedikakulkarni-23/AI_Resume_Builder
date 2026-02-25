import express from "express"
import protect from "../middlewares/authMiddleware.js";
import { createResume, deleteResume, getPublicResumeById, getResumeById, updateResume } from "../controllers/resumeController.js";
import upload from "../configs/multer.js"


const resumeRouter = express.Router();

resumeRouter.post('/api/create', protect, createResume)
resumeRouter.put('/api/update', upload.single('image'), protect, updateResume)
resumeRouter.delete('/api/delete/:resumeId', protect, deleteResume)
resumeRouter.get('/api/get/:resumeId', protect, getResumeById)
resumeRouter.get('/api/public/:resumeId', getPublicResumeById)

export default resumeRouter