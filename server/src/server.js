import cors from 'cors';
import express from 'express';
import { sequelize } from './configs/db.js';
import { verifyToken } from './middlewares/Authentication.middleware.js';
import { errorHandler } from './middlewares/ErrorHandler.middleware.js';
import { configurationRouter } from './routes/Configuration.routes.js';
import { filesRouter } from './routes/Files.routes.js';
import { userRouter } from './routes/User.routes.js';

const serve = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    const PORT = process.env.PORT || 8080;

    const app = express();
    app.use(express.json());
    app.use(cors());

    app.use('/users', userRouter);
    app.use('/configurations', configurationRouter);
    app.use('/files', filesRouter);

    app.get('users/:id/test', verifyToken, (req, res) => {
      res.json({ a: 'this' });
    });

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

    app.use(errorHandler);
  } catch (err) {
    console.log(err);
  }
};

serve();
