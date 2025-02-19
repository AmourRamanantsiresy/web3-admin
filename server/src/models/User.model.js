import { DataTypes } from 'sequelize';
import { sequelize } from '../configs/db.js';
import { Files } from './Files.model.js';

export const User = sequelize.define(
  '__User__',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profil_picture_id: {
      type: DataTypes.UUID,
      references: {
        model: Files,
        key: 'id',
      },
      allowNull: true,
    },
  },
  {
    timestamps: false,
    tableName: '__User__',
  }
);

Files.hasOne(User, { foreignKey: 'profil_picture_id' });
User.belongsTo(Files, { foreignKey: 'profil_picture_id' });
