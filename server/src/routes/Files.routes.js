import express from 'express';
import { FilesController } from '../controllers/Files.controllers.js';

export const filesRouter = express.Router();

filesRouter.get('/:id', FilesController.getOne);
