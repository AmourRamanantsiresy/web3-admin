import { FilesServices } from '../services/Files.services.js';

export class FilesController {
  static async setConfigurationImage(req, res) {
    const { configurationId, fileId } = req.params;
    const data = await FilesServices.setConfigurationImage(configurationId, fileId, req.filePath);
    res.json(data);
  }

  static async setUserProfilPicture(req, res) {
    const { fileId } = req.params;
    const userId = req.user?.id;
    const data = await FilesServices.setUserProfilPicture(userId, fileId, req.filePath);
    res.json(data);
  }

  static async getOne(req, res) {
    const { fileId } = req.params;
    const filePath = await FilesServices.getOne(fileId);
    res.json({ filePath });
  }
}
