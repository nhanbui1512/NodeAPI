const accountController = require('../app/controller/AccountController')
const express = require('express');
const router = express.Router();

router.get('/',accountController.getAllAccount)

module.exports = router;