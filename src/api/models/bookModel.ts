import { sequelize } from '../../db';
import { RoomModel } from './roomModel';
import { PaymentMethodModel } from './paymentMethodModel';
import { CustomerModel } from './customerModel';

const { DataTypes } = require('sequelize');

export const BookModel = sequelize.define('tblBook', {
  startDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  peopleQuantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  totalPrice: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  roomId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  paymentMethodId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  customerId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, { underscored: true, timestamps: false });

// BookModel.hasOne(RoomModel, { foreignKey: 'roomId' });
BookModel.hasOne(PaymentMethodModel, { foreignKey: 'paymentMethodId' });
BookModel.hasOne(CustomerModel, { foreignKey: 'customerId' });
