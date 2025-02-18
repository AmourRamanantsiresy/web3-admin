import { Files } from '../models/Files.model.js';
import { ConfigurationServices } from './Configuration.services.js';
import { UserServices } from './User.services.js';

export class FilesServices {
  static async setConfigurationImage(configurationId, fileId, filePath) {
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

  static async setUserProfilPicture(userId, fileId, filePath) {
    const user = await UserServices.getOneById(userId);
    if (!user) {
      throw new Error(`User with id=${configurationId} not found`);
    }
    await Files.create({ id: fileId, file_path: filePath });
    user.profil_picture_id = fileId;
    return await user.save();
  }
}
