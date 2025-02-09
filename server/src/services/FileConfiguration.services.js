import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '../configs/constants.js';
import { FileConfiguration } from '../models/FileConfiguration.model.js';

export class FileConfigurationServices {
  static async getAllByConfigurationId(configurationId, page = DEFAULT_PAGE, perPage = DEFAULT_PAGE_SIZE, filename = undefined) {
    const offset = (page - 1) * perPage;
    const filter = filename ? { where: { configuration_id: configurationId, filename: { [Op.like]: `%${filename}%` } } } : {};
    const fileConfigurations = await FileConfiguration.findAll({ ...filter, limit: perPage + 1, offset: offset });
    return {
      data: fileConfigurations.slice(0, perPage),
      hasNext: fileConfigurations.length > perPage,
    };
  }

  static async getOneById(configurationId, fileConfigurationId) {
    const fileConfiguration = await FileConfiguration.findOne({ where: { configuration_id: configurationId, id: fileConfigurationId } });
    if (!fileConfiguration) {
      throw new Error(`File configuration with id=${fileConfigurationId} and configuration id=${configurationId} not found`);
    }
    return fileConfiguration;
  }

  static async saveOne(configurationId, fileConfigurationId, fileConfiguration) {
    const storedFileConfiguration = await FileConfiguration.findOne({ where: { configuration_id: configurationId, id: fileConfigurationId } });

    if (!storedFileConfiguration) {
      return await FileConfiguration.create({ ...fileConfiguration, id: fileConfigurationId });
    }

    Object.keys(fileConfiguration).forEach(key => (storedFileConfiguration[key] = fileConfiguration[key]));
    return await storedFileConfiguration.save();
  }
}
