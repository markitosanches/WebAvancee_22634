const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const fs = require('fs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:true }))


app.get('/listUsers', function (req, res) {
    fs.readFile(__dirname + "/user.json", "utf-8", function(err, data){
        if(err) throw err
       // console.log(data)
        res.end(data)
    })
})

app.get('/form', function(req, res){
    res.sendFile(__dirname + '/form.html');
})

app.post('/add-user', function(req, res) {
    //console.log(req.body)
    //lire le fichier
    fs.readFile(__dirname + "/user.json", "utf-8", function(err, data){
        if(err) throw err
        data = JSON.parse(data)
        //console.log(data);
        data["user"+req.body.id] = req.body
        //console.log(data)
        var newData = JSON.stringify(data)
        fs.writeFile(__dirname + "/user.json", newData, err => {
            if(err) throw err
            console.log('success')
        })
    })
})
app.get('/form-data', function(req, res){
    res.sendFile(__dirname + '/form-data.html');
})

app.get('/id=:id', function (req, res){
    fs.readFile(__dirname + "/user.json", "utf-8", function(err, data){
        if(err) throw err
        var users = JSON.parse(data)
        var user = users["user"+req.params.id]
        console.log(user)
        res.end(JSON.stringify(user))
    })
})

app.put('/update-user', function(req, res){
    //console.log(req.body)
    fs.readFile(__dirname + "/user.json", "utf-8", function (err, data){
        if(err) throw err
        data = JSON.parse(data)
        data["user"+req.body.id] = req.body
        var newData = JSON.stringify(data)
        fs.writeFile('user.json', newData, err => {
            if(err) throw err
            console.log('success')
        })
    })
})

app.delete('/delete-user/:id', function(req, res){
    //console.log(req.params.id)
    fs.readFile(__dirname + "/user.json", "utf-8", function (err, data){
        if(err) throw err
        data = JSON.parse(data)
        delete data["user"+req.params.id]
        var newData = JSON.stringify(data)
        fs.writeFile('user.json', newData, err => {
            if(err) throw err
            console.log('success')
        })
    })

})

app.listen(8081, function () {
    console.log("Listening at 8081")
})