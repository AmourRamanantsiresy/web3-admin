import express from 'express';
import { ConfigurationController } from '../controllers/Configuration.controllers.js';
import { FileConfigurationController } from '../controllers/FileConfiguration.controllers.js';
import { FilesController } from '../controllers/Files.controllers.js';
import { fileUpload } from '../middlewares/FilesUpload.middleware.js';
import { validateConfiguration } from '../validators/Configuration.validator.js';
import { validateFileConfiguration } from '../validators/FileConfiguration.validator.js';

export const configurationRouter = express.Router();

configurationRouter.get('/', ConfigurationController.getAll);
configurationRouter.get('/:configurationId', ConfigurationController.getOne);
configurationRouter.put('/:configurationId', validateConfiguration, ConfigurationController.saveOne);
// files
configurationRouter.put('/:configurationId/files/:fileId', fileUpload, FilesController.saveOne);

// file configuration
configurationRouter.get('/:configurationId/fileConfiguration', FileConfigurationController.getAll);
configurationRouter.get('/:configurationId/fileConfiguration/:fileConfigurationId', FileConfigurationController.getOneById);
configurationRouter.put('/:configurationId/fileConfiguration/:fileConfigurationId', validateFileConfiguration, FileConfigurationController.saveOne);
