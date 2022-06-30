import { sequelize } from '../../db';

const { DataTypes } = require('sequelize');

export const PaymentMethodModel = sequelize.define('tblPaymentMethod', {
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, { underscored: true, timestamps: false });
