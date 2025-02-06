import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';
import Configuration from './Configuration.model.js';

const FileConfiguration = sequelize.define(
  'file_configuration',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    configuration_id: {
      type: DataTypes.UUID,
      references: {
        model: Configuration,
        key: 'id',
      },
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: false,
    tableName: 'file_configuration',
  }
);

Configuration.hasMany(FileConfiguration, { foreignKey: 'configuration_id' });
FileConfiguration.belongsTo(Configuration, { foreignKey: 'configuration_id' });

export default FileConfiguration;
