const express = require('express');
const router = express.Router();
// Remove the cors require and router.use(cors) block from here!

const { test, registerUser, loginUser, getProfile, logoutUser } = require('../controllers/authController.js');

router.get('/', test);
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', getProfile);
router.post('/logout', logoutUser);

module.exports = router;