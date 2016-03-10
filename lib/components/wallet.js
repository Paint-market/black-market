var react = require('react')
// let's assume the object of user info is called 'user'

//test object

var user = {
  "name": "Bob",
  "money": "500",
}

module.exports = react.createClass({




  getinitialstate: function() {

  return {money: user.money, }
},
  update: function (e) {
    this.setState({money: e.user.money})
  },

  render: function() {
    return (
      <span className='wallet'>
      {this.state.money}
      </span>
    )
  }
})
