const OrderController = require('../controllers/order.controller')
const {authenticate} = require("../config/jwt.config")

const routes = (app)=>{

    app.post('/api/orders',authenticate, OrderController.create)

    app.get('/api/orders', OrderController.getAll)

    app.get('/api/orders/:id', OrderController.getOne)

    app.put('/api/orders/:id', OrderController.update)

    app.delete('/api/orders/:id', OrderController.delete)

    //app.get('/api/ordersbyuser/:username', authenticate, OrderController.findAllProductsByUser)

}

module.exports = routes