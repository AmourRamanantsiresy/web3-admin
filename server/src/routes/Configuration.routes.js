import express from 'express';
import { Op } from 'sequelize';
import { v4 } from 'uuid';
import { Configuration } from '../models/Configuration.model.js';
import { validateConfiguration } from '../validators/Configuration.validator.js';

export const configurationRouter = express.Router();

configurationRouter.get('/', async (req, res) => {
  try {
    const { title, page = 1, perPage = 10 } = req.query;
    const offset = (page - 1) * perPage;
    const filter = title ? { where: { title: { [Op.like]: `%${title}%` } } } : {};
    const configurations = await Configuration.findAll({ ...filter, limit: perPage + 1, offset: offset });
    res.json({ data: configurations.slice(0, perPage) || [], hasNext: configurations.length > perPage });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

configurationRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const configuration = await Configuration.findByPk(id);

    if (!configuration) {
      return res.status(404).json({ error: 'Configuration not found' });
    }

    res.json(configuration);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

configurationRouter.put('/:id', validateConfiguration, async (req, res) => {
  const { id = v4() } = req.params;
  try {
    let configurationForProvidedId = await Configuration.findByPk(id);

    if (!configurationForProvidedId) {
      configurationForProvidedId = await Configuration.create({ ...req.validatedData, id });
    } else {
      Object.keys(req.validatedData).forEach(key => (configurationForProvidedId[key] = req.validatedData[key]));
      await configurationForProvidedId.save();
    }
    res.status(201).json(configurationForProvidedId);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});
