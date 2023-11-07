import express from 'express';
import { getUsers, postUser } from '../controlers/userControllers.js';

const router = express.Router();

// Get
router.get('/', getUsers);

// Post
router.post('/', postUser);

export default router;
