import express from 'express';
import { Op } from 'sequelize';
import { Configuration } from '../models/Configuration.model.js';

export const configurationRouter = express.Router();

configurationRouter.get('/', async (req, res) => {
  try {
    const { title, page = 1, perPage = 10 } = req.query;
    const offset = (page - 1) * perPage;
    const filter = title ? { where: { title: { [Op.iLike]: `%${title}%` } } } : {};
    const { rows: configurations, total = 0 } = await Configuration.findAll({ ...filter, limit: parseInt(perPage), offset: parseInt(offset) });
    res.json({
      data: configurations || [],
      totalPage: Math.ceil(total / perPage),
    });
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
