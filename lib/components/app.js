var _ = require('lodash')
var React = require('react')
var Wallet = require('./wallet.js')
var Card  = require('./card')
var CardList  = require('./card-list')
var request = require('superagent')

module.exports = React.createClass({
  getInitialState: function() {
    return {
      cards: []
    }
  },

  getCards: function() {
    request
      .get('http://localhost:3000/market/paintings')
      .end( function() {
        console.log("In getCards")
        this.setState({ cards: cards.toJSON() })
      }.bind(this))
  },

  render: function() {
    return (
      <CardList cards={this.state.cards} />
    )
  },
  render: function () {
    console.log("now rendering")
    return (
      <div>
      <div></div>
      <div><span className='Wallet'> <Wallet /></span></div>
      </div>
      // <Card />
      )
  }

})
