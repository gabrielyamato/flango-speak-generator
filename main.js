const express = require('express')
const app = express()
const generator = require('./generator')
const path = require('path')

app.listen(8080, function(){
    console.log("Listening 8080")
})

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '\\public\\', 'home.html'))  
})

app.get('/generate', function (req, res) {
    res.send(generator.random_generator())
  })

//console.log("hello")