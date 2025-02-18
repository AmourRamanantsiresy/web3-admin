import { ConfigurationServices } from '../services/Configuration.services.js';

export class ConfigurationController {
  static async getAll(req, res) {
    const { title, page, pageSize } = req.query;
    const userId = req.user?.id;

    const data = await ConfigurationServices.getAll(userId, title, page, pageSize);
    res.status(200).json(data);
  }

  static async getOne(req, res) {
    const { configurationId } = req.params;
    const data = await ConfigurationServices.getOne(configurationId);
    res.status(200).json(data);
  }

  static async saveOne(req, res) {
    const { configurationId } = req.params;
    const userId = req.user?.id;
    const { validatedData } = req;
    const data = await ConfigurationServices.saveOne(configurationId, userId, validatedData);
    res.status(200).json(data);
  }
}
