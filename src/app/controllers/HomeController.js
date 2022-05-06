class HomeController {
    
    // [GET] /home
    getHome(req, res, next) {
        res.render('login', { layout : false });
    }

    getDashboard(req, res, next) {
        console.log("user, pass", req.body.userName);
        res.render('products');
    }
}

module.exports = new HomeController;