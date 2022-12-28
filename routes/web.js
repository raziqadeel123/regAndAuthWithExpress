import express from 'express';
const router = express.Router();
import UserController from '../controllers/userController.js';

router.get('/', UserController.home);
router.get('/registration', UserController.registration);
router.get('/login', UserController.login);

export default router;
