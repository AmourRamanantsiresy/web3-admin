import express from 'express';
import { UserController } from '../controllers/User.controllers.js';
import { validateUser } from '../validators/User.validator.js';
import { validateUserCredential } from '../validators/UserCredential.validator.js';

export const userRouter = express.Router();

userRouter.post('/:id/signUp', validateUser, UserController.signUp);
userRouter.post('/signIn', validateUserCredential, UserController.signIn);
