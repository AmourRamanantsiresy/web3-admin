import express from 'express';
import { sequelize } from './configs/db.js';
import { BadRequestError } from './errors/BadRequest.error.js';
import { errorHandler } from './middlewares/ErrorHandler.middleware.js';
import { configurationRouter } from './routes/Configuration.routes.js';
import { filesRouter } from './routes/Files.routes.js';

const serve = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    const PORT = process.env.PORT || 8080;

    const app = express();
    app.use(express.json());

    app.get('/', (req, res) => {
      res.send('Hello, Express with PostgreSQL!');
    });

    app.get('/test/error', (req, res, next) => {
      BadRequestError('There is an error', next);
    });

    app.use('/configurations', configurationRouter);
    app.use('/files', filesRouter);

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

    app.use(errorHandler);
  } catch (err) {
    console.log(err);
  }
};

serve();
