import express from 'express';
import { getUsers } from '../controlers/userControlers.js';

const router = express.Router();

router.get('/', getUsers);
export default router;
