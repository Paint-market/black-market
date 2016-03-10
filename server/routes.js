var fs = require('fs')
var app = require('express')
var path = require('path')

module.exports = function () {

  app.get('/market/paintings', function (req, res) {
    console.log("REQ", req.body)
    fs.readFile(join.path(__dirname, 'db.json'), function (resp){
      
    })
  })

  
}