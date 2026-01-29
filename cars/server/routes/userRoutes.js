import express from 'express'
import { loginUser, registerUser } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser)
userRouter.post('/register', loginUser)

export default userRouter