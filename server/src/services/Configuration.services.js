import { Op } from 'sequelize';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '../configs/constants.js';
import { Configuration } from '../models/Configuration.model.js';

export class ConfigurationServices {
  static async getAll(query, page = DEFAULT_PAGE, perPage = DEFAULT_PAGE_SIZE) {
    const offset = (page - 1) * perPage;
    const filter = query ? { where: { title: { [Op.like]: `%${query}%` } } } : {};
    const configurations = await Configuration.findAll({ ...filter, limit: perPage + 1, offset: offset });
    return { data: configurations.slice(0, perPage) || [], hasNext: configurations.length > perPage };
  }

  static async getOne(id) {
    return await Configuration.findByPk(id);
  }

  static async saveOne(id, configuration) {
    let configurationForProvidedId = await Configuration.findByPk(id);

    if (!configurationForProvidedId) {
      return await Configuration.create({ ...configuration, id });
    }

    Object.keys(configuration).forEach(key => (configurationForProvidedId[key] = configuration[key]));
    return await configurationForProvidedId.save();
  }
}
