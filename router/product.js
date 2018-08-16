const express = require('express');
const route = express.Router();

route.get('/product/list', function(req, res, next){
    res.render('product', {
        products: [
            {id: 1, name: "华为手机", price:8000, amount:1000},
            {id: 2, name: "苹果手机", price:10000, amount:2000}
        ]
    })
})


module.exports = route;