var _ = require('lodash')
var React = require('react')
var CardList  = require('./card-list')
var request = require('superagent')
var path  = require('path')

module.exports = React.createClass({
  getInitialState: function() {
    return {
      cards: []
    }
  },

  getCards: function() {
    request
      .get('/market/paintings')
      .end(function() {
        this.setState({ cards: cards.toJSON() })
      }.bind(this))
  },

  render: function() {
    return (
      <CardList cards={this.state.cards} />
    )
  }
})
