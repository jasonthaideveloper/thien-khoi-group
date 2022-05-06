const Products = require("../models/ProductModel");
const { multipleMongooseToObject } = require("../../util/mongoose");

class ProductController {
    
    // [GET] /product
    getProducts(req, res, next) {
        Products.find({})
            .then(products => {
                res.render('products', {
                    products: multipleMongooseToObject(products),
                })
            })
            .catch(next);
    }

    // [GET] /product/create
    // createProduct(req, res, next) {
    //     res.render('products');
    // }

    // [POST] /product/create
    storeProduct(req, res, next) {
        console.log(req.body);
        res.json(req.body);
    }

}

module.exports = new ProductController;