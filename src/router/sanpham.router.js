
const SanPhamController = require('../app/controller/SanPhamController')
const express = require('express');
const router = express.Router();


router.get('/balo',SanPhamController.getAllBalo)
router.get('/jacket',SanPhamController.getAllJacket)
router.get('/tee',SanPhamController.getAllTee)
router.get('/',SanPhamController.getAllProduct)

module.exports = router;