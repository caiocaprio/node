const routes = require('express').Router();

const ProductController = require('./controllers/ProductController')

routes.get('/products', ProductController.index)
routes.get('/products/:id', ProductController.find)
routes.put('/products/:id', ProductController.update)
routes.post('/products', ProductController.create)
routes.delete('/products/:id', ProductController.delete)


module.exports = routes;


