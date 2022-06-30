import express from 'express';
import { PaymentMethodModel } from '../models/PaymentMethodModel';
const paymentMethodRouter = express.Router();

paymentMethodRouter.get('/paymentMethods', async (req, res) => {
  const a = await PaymentMethodModel.findAll();
  return res.json(a);
});

paymentMethodRouter.post('/paymentMethod', async (req, res) => {
  const a = await PaymentMethodModel.create(req.body);
  return res.json(a);
});

export default paymentMethodRouter;
