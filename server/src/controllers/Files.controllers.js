import { FilesServices } from '../services/Files.services.js';

export class FilesController {
  static async saveOne(req, res) {
    const { id, fileId } = req.params;
    const data = await FilesServices.saveOne(id, fileId, req.filePath);
    res.json(data);
  }

  static async getOne(req, res) {
    const { id } = req.params;
    const filePath = await FilesServices.getOne(id);
    res.json({ filePath });
  }
}
