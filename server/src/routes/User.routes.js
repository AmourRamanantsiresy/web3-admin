import express from 'express';
import { FilesController } from '../controllers/Files.controllers.js';
import { UserController } from '../controllers/User.controllers.js';
import { fileUpload } from '../middlewares/FilesUpload.middleware.js';
import { validateUser } from '../validators/User.validator.js';
import { validateUserCredential } from '../validators/UserCredential.validator.js';

export const userRouter = express.Router();

userRouter.post('/signUp', validateUser, UserController.signUp);
userRouter.post('/signIn', validateUserCredential, UserController.signIn);
userRouter.put('/:userId/files/:fileId', fileUpload, FilesController.setConfigurationImage);
