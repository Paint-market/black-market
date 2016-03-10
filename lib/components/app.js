var _ = require('lodash')
var React = require('react')
var Wallet = require('./wallet.js')
var Card  = require('./card')

module.exports = React.createClass ({
  render: function () {



    console.log("now rendering")
    return (
      <div><span className='wallet'> <Wallet /></span></div>
      <Card />
      )
  }

})
