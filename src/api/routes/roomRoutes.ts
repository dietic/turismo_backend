import express from 'express';
import { RoomModel } from '../models/roomModel';
const roomRouter = express.Router();

roomRouter.get('/rooms', async (req, res) => {
  const a = await RoomModel.findAll();
  return res.json(a);
});

roomRouter.post('/room', async (req, res) => {
  const a = await RoomModel.create(req.body);
  return res.json(a);
});

export default roomRouter;
