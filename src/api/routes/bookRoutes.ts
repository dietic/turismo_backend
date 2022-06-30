import express from 'express';
import { BookModel } from '../models/bookModel';
const bookRouter = express.Router();

bookRouter.get('/books', async (req, res) => {
  const a = await BookModel.findAll();
  return res.json(a);
});

bookRouter.post('/book', async (req, res) => {
  const a = await BookModel.create(req.body);
  return res.json(a);
});

export default bookRouter;
