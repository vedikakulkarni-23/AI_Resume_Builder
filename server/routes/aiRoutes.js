import express from "express"
import protect from "../middlewares/authMiddleware.js";
import { enhanceJobDescription, enhanceProfessionalSummary, uploadResume } from "../controllers/aiController.js";

const aiRouter = express.Router();

aiRouter.post('/api/enhance-pro-sum', protect, enhanceProfessionalSummary)
aiRouter.post('/api/enhance-job-des', protect, enhanceJobDescription)
aiRouter.post('/api/upload-resume', protect, uploadResume)

export default aiRouter;