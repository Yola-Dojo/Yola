const ProductController = require('../controllers/product.controller')
const {authenticate} = require("../config/jwt.config")

const routes = (app)=>{

    app.post('/api/products', authenticate, ProductController.create)

    app.get('/api/products', ProductController.getAll)

    app.get('/api/products/:id', ProductController.getOne)

    app.put('/api/products/:id', ProductController.update)

    app.delete('/api/products/:id', ProductController.delete)

    app.get('/api/productsbyuser/:username', authenticate, ProductController.findAllProductsByUser)

}

module.exports = routes