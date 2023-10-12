const db = require('../models')
const Product = db.products 

exports.findAll = (req, res) => {
    Product.findAll()
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: 'table not found'
        })
    })

}

exports.create = (req, res) => {
    console.log(req.body)
}