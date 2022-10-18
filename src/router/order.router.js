const orderController = require('../app/controller/OrderController')
const express = require('express');
const router = express.Router();

router.get('/', orderController.getAllOrder)

module.exports = router;