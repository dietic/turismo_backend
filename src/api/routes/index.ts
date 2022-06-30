import config from '../../config';
import express from 'express';
import roomRouter from './roomRoutes';
import customerRouter from './customerRoutes';
import paymentMethodRouter from './paymentMethodRoutes';
import bookRouter from './bookRoutes';
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ latest_version: config.app.version, service: config.app.service });
});

router.use('/', roomRouter);
router.use('/', customerRouter);
router.use('/', paymentMethodRouter);
router.use('/', bookRouter);

export default router;
