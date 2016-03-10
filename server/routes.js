var fs = require('fs')
var path = require('path')
var Router = require('express').Router
var bodyParser = require('body-parser')
var router = Router()

var urlencodedParser = bodyParser.urlencoded({ extended: false })

  router.get('/', function (req, res) {
    res.send('Hello Gay')
  })

  router.get('/market/paintings', urlencodedParser, function (req, res) {
    // console.log("REQ", req)
    var jsonPath = path.join(__dirname, '../data/db.json')
    console.log(jsonPath)
    fs.readFile(jsonPath, 'utf8', function (err, data){
        console.log(data)
    })
  })

module.exports = router