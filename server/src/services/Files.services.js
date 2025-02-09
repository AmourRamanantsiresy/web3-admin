import { Files } from '../models/Files.model.js';
import { ConfigurationServices } from './Configuration.services.js';

export class FilesServices {
  static async saveOne(configurationId, fileId, filePath) {
    const configuration = await ConfigurationServices.getOne(configurationId);
    if (!configuration) {
      throw new Error(`Configuration with id=${configurationId} not found`);
    }
    await Files.create({ id: fileId, file_path: filePath });
    configuration.image_id = fileId;
    return await configuration.save();
  }

  static async getOne(id) {
    const file = await Files.findByPk(id);
    if (!file) {
      throw new Error(`File with id=${id} not found`);
    }
    return file.file_path;
  }
}
