import express from 'express';
import { CustomerModel } from '../models/customerModel';
const customerRouter = express.Router();

customerRouter.get('/customers', async (req, res) => {
  const a = await CustomerModel.findAll();
  return res.json(a);
});

customerRouter.post('/customer', async (req, res) => {
  const a = await CustomerModel.create(req.body);
  return res.json(a);
});

export default customerRouter;
