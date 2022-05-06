const express = require('express');
const router = express.Router();
const homeController = require('../app/controllers/HomeController');

router.post('/:id', homeController.getDashboard);
router.get('/', homeController.getHome);

module.exports = router;