import { DataTypes } from 'sequelize';
import { sequelize } from '../configs/db.js';
import { Files } from './Files.model.js';
import { User } from './User.model.js';

export const Configuration = sequelize.define(
  'configuration',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    user_id: {
      type: DataTypes.UUID,
      references: {
        model: User,
        key: 'id',
      },
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    image_id: {
      type: DataTypes.UUID,
      references: {
        model: Files,
        key: 'id',
      },
      allowNull: true,
    },
    configuration_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    timestamps: false,
    tableName: 'configuration',
  }
);

Files.hasOne(Configuration, { foreignKey: 'image_id' });
Configuration.belongsTo(Files, { foreignKey: 'image_id' });

User.hasMany(Configuration, { foreignKey: 'user_id' });
Configuration.belongsTo(User, { foreignKey: 'user_id' });
