class CustomersController {
    
    // [GET] /user
    getCustomers(req, res, next) {
        res.render('customers');
    }

}

module.exports = new CustomersController;