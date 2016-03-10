var express = require('express')
var app = express()
var routes = require('./routes')
var bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', routes)

app.listen(3000, function () {
  console.log('Shit\'s hot over at port 3000')
})