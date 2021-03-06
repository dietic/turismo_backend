import { sequelize } from '../../db';

const { DataTypes } = require('sequelize');

export const CustomerModel = sequelize.define('tblCustomer', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  documentNumber: {
    type: DataTypes.TEXT
  },
  firstName: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  lastName: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  phone: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, { underscored: true, timestamps: false });
