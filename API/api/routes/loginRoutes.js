const express = require('express');
const { getUserByUsernameAndPassword } = require('../controllers/login');
const router = express.Router();

router.get('/username/:username/password/:password', getUserByUsernameAndPassword);

module.exports = router;
