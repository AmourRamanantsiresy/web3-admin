import { ConfigurationServices } from '../services/Configuration.services.js';

export class ConfigurationController {
  static async getAll(req, res) {
    const { title, page, pageSize } = req.query;
    const data = await ConfigurationServices.getAll(title, page, pageSize);
    res.status(200).json(data);
  }

  static async getOne(req, res) {
    const { id } = req.params;
    const data = await ConfigurationServices.getOne(id);
    res.status(200).json(data);
  }

  static async saveOne(req, res) {
    const { id } = req.params;
    const { validatedData } = req;
    const data = await ConfigurationServices.saveOne(id, validatedData);
    res.status(200).json(data);
  }
}
