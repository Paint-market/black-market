var _ = require('lodash')
var React = require('react')
var Wallet = require('./wallet.js')


module.exports = React.createClass ({
  render: function () {



    console.log("now rendering")
    return (
      <div>
      <div> Hello World </div>
      <div><span className='wallet'> <Wallet /></span></div>
      </div>
      )
  }

})
