import express from 'express';

import { monthStat } from '../controllers/statistics.js';

const router = express.Router();

router.get('/', monthStat);


export default router;