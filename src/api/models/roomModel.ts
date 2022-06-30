import { sequelize } from '../../db';

const { DataTypes } = require('sequelize');

export const RoomModel = sequelize.define('tblRoom', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  beds: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  number: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  state: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  pricePerNight: {
    type: DataTypes.DOUBLE,
    allowNull: false
  }
}, { underscored: true, timestamps: false });
