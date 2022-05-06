class UsersController {
    
    // [GET] /user
    getUsers(req, res, next) {
        res.render('users');
    }

}

module.exports = new UsersController;