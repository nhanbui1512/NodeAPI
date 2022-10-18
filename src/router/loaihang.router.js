const loaihangController = require('../app/controller/LoaiHangController')
const express = require('express');
const router = express.Router();

router.get('/', loaihangController.getAllLoaiHang)

module.exports = router;