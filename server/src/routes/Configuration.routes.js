import express from 'express';
import { ConfigurationController } from '../controllers/Configuration.controllers.js';
import { FileConfigurationController } from '../controllers/FileConfiguration.controllers.js';
import { FilesController } from '../controllers/Files.controllers.js';
import { fileUpload } from '../middlewares/FilesUpload.middleware.js';
import { validateConfiguration } from '../validators/Configuration.validator.js';
import { validateFileConfiguration } from '../validators/FileConfiguration.validator.js';

export const configurationRouter = express.Router();

configurationRouter.get('/', ConfigurationController.getAll);
configurationRouter.get('/:id', ConfigurationController.getOne);
configurationRouter.put('/:id', validateConfiguration, ConfigurationController.saveOne);
// files
configurationRouter.put('/:id/files/:fileId', fileUpload, FilesController.saveOne);

// file configuration
configurationRouter.get('/:id/fileConfiguration', FileConfigurationController.getAll);
configurationRouter.get('/:id/fileConfiguration/:fileConfigurationId', FileConfigurationController.getOneById);
configurationRouter.put('/:id/fileConfiguration/:fileConfigurationId', validateFileConfiguration, FileConfigurationController.saveOne);
