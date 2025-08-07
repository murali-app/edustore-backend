// src/modules/user/user.routes.ts
import { Router } from 'express';
import { getAllUsers, getUser } from './user.controller';
import { requireAuth } from '../auth/auth.middleware';

const router = Router();

router.get('/', requireAuth, getAllUsers);
router.get('/:id', requireAuth, getUser);

export default router;
