const usersRouter = require('./users');
const productsRouter = require('./products');
const customersRouter = require('./customers');
const loginRouter = require('./login');

function routes(app) {
    app.use('/customers', customersRouter);
    app.use('/users', usersRouter);
    app.use('/products', productsRouter);
    // app.use('/', loginRouter);
    app.use('/', loginRouter);
}

module.exports = routes;