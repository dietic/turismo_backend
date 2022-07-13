import { sequelize } from '../../db';

const { DataTypes } = require('sequelize');

export const PaymentMethodModel = sequelize.define('tblPaymentMethod', {
  name: {
    type: DataTypes.TEXT
  }
}, { underscored: true, timestamps: false });
