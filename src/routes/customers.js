const express = require('express');
const router = express.Router();
const customersController = require('../app/controllers/CustomersController');


router.use('/', customersController.getCustomers);

module.exports = router;