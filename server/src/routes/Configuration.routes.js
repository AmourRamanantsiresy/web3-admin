import express from 'express';
import { ConfigurationController } from '../controllers/Configuration.controllers.js';
import { FilesController } from '../controllers/Files.controllers.js';
import { fileUpload } from '../middlewares/FilesUpload.middleware.js';
import { validateConfiguration } from '../validators/Configuration.validator.js';

export const configurationRouter = express.Router();

configurationRouter.get('/', ConfigurationController.getAll);
configurationRouter.get('/:id', ConfigurationController.getOne);
configurationRouter.put('/:id', validateConfiguration, ConfigurationController.saveOne);
configurationRouter.put('/:id/files/:fileId', fileUpload, FilesController.saveOne);
