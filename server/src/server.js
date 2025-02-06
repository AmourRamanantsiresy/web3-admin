import express from 'express';
import { sequelize } from './config/db.js';

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

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

serve();
