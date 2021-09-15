import config from '../config';
import express from 'express';
import routes from './routes';
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ latest_version: config.app.version, service: config.app.service });
});

router.use('/api/routes', routes);

export default router;
