import { DataTypes } from 'sequelize';
import { sequelize } from '../configs/db.js';

export const Files = sequelize.define(
  'files',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    file_path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: 'files',
  }
);
