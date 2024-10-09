import express from 'express';
import { register, login } from '../controllers/authController.js';
import authenticateToken from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

// To verify our jwt token
router.get('/dashboard', authenticateToken, (req, res) => {
    res.json({ message: `Welcome to the dashboard, ${req.user.username}` });
});

module.exports = router;
