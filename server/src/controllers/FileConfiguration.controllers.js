import { NotFoundError } from '../errors/NotFound.error.js';
import { FileConfigurationServices } from '../services/FileConfiguration.services.js';

export class FileConfigurationController {
  static async getAll(req, res, _next) {
    const { configurationId } = req.params;
    const { page, perPage, filename } = req.query;
    const data = await FileConfigurationServices.getAllByConfigurationId(configurationId, page, perPage, filename);
    return res.json(data);
  }

  static async getOneById(req, res, _next) {
    const { configurationId, fileConfigurationId } = req.params;
    const data = await FileConfigurationServices.getOneById(configurationId, fileConfigurationId);
    return res.json(data);
  }

  static async saveOne(req, res, next) {
    try {
      const { configurationId, fileConfigurationId } = req.params;
      const data = await FileConfigurationServices.saveOne(configurationId, fileConfigurationId, req.validatedData);
      return res.json(data);
    } catch (error) {
      NotFoundError(error.message, next);
    }
  }
}
