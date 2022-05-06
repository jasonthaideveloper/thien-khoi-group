const express = require('express');
const router = express.Router();
const productController = require('../app/controllers/ProductController');

router.post('/store', productController.storeProduct);
// router.use('/create', productController.createProduct);
// router.use('/:slug', productController.getProductDetail);
router.get('/', productController.getProducts);

module.exports = router;