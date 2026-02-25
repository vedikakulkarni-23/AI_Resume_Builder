import express from 'express';
import { getUserById, getUserResumes, loginUser, registerUser } from '../controllers/userController.js';
import protect from '../middlewares/authMiddleware.js';


const userRouter = express.Router();

userRouter.post('/api/register', registerUser)
userRouter.post('/api/login', loginUser)
userRouter.get('/api/data', protect, getUserById)
userRouter.get('/api/resumes', protect, getUserResumes)

export default userRouter;