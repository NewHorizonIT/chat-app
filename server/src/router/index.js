'use strict';

import { Router } from 'express';

const router = Router();

router.get('/', (req, res, next) => {
  return res.json({ message: 'routing is running' });
});

export default router;
