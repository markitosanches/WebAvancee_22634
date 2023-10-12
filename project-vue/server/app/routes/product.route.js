module.exports = app => {
    const product = require('../controllers/product.controller.js')

    const router = require('express').Router()

    router.get('/', product.findAll)

    router.post('/', product.create)

    router.get('/:id', product.findByPk)

    app.use('/api/product', router)
}