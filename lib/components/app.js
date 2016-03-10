var _ = require('lodash')
var React = require('react')
var CardList  = require('./card-list')
var request = require('superagent')
var path  = require('path')

module.exports = React.createClass({
  getInitialState: function() {
    console.log("in gential state")
    return {
      cards: []
    }
  },

  getCards: function() {
    console.log("in get cards")
    request
      .get('http://localhost:3000/market/paintings')
      .end( function(err, data) {
        if (err) throw err
        console.log(data)
        this.setState({ cards: cards.toJSON() })
        }.bind(this))
  },

  render: function() {
    console.log("in app render")
    return (
      <CardList cards={this.state.cards} />
    )
  }

})
