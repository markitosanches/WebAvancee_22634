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
    //console.log(req.body)
    if(!req.body.name || !req.body.photo){
        res.status(400).send({
            message: 'Name & photo are mandatory'
        })
        return
    }
    Product.create(req.body)
    .then(data => {
        res.send(data)
    })
    .catch(e => {
        res.status(500).send({
            message: 'Could not insert into the DB'
        })
    })
}

exports.findByPk = (req, res) => {
    const id = req.params.id
    Product.findByPk(id)
    .then(data => {
        res.send(data)
    })
    .catch(e => {
        res.status(500).send({
            message: 'Could not find the data'
        })
    })
}