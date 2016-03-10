var express = require('express')
var app = express()
var routes = require('./routes')


app.get('/', function (req, res) {
  res.send('Hello Gay')
})

routes()

app.listen(3000, function () {
  console.log('Shit\'s hot over at port 3000')
})