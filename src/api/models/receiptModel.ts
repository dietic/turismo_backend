import { sequelize } from '../../db';
import { BookModel } from './bookModel';

const { DataTypes } = require('sequelize');

export const ReceiptModel = sequelize.define('tblPaymentMethod', {
  totalPrice: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  state: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  bookId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, { underscored: true, timestamps: false });

ReceiptModel.hasOne(BookModel, { foreignKey: 'bookId' });
